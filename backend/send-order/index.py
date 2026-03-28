import json
import os
import smtplib
import urllib.request
import urllib.parse
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта на email и в Telegram"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    category = body.get('category', '').strip()
    comment = body.get('comment', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    message_text = (
        f"📋 Новая заявка с сайта СеверПолимер\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"🏗️ Направление: {category or 'не указано'}\n"
        f"💬 Комментарий: {comment or 'не указан'}"
    )

    errors = []

    # Отправка в Telegram
    tg_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    tg_chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
    if tg_token and tg_chat_id:
        try:
            tg_url = f"https://api.telegram.org/bot{tg_token}/sendMessage"
            tg_data = urllib.parse.urlencode({
                'chat_id': tg_chat_id,
                'text': message_text,
                'parse_mode': 'HTML',
            }).encode()
            req = urllib.request.Request(tg_url, data=tg_data, method='POST')
            urllib.request.urlopen(req, timeout=10)
        except Exception as e:
            errors.append(f'Telegram: {str(e)}')

    # Отправка на email через mail.ru SMTP
    email_to = os.environ.get('EMAIL_TO', '')
    smtp_login = os.environ.get('SMTP_LOGIN', '')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    if email_to and smtp_login and smtp_password:
        try:
            msg = MIMEMultipart('alternative')
            msg['Subject'] = f'Новая заявка от {name} — СеверПолимер'
            msg['From'] = smtp_login
            msg['To'] = email_to

            html_body = f"""
            <html><body style="font-family:Arial,sans-serif;font-size:15px;color:#222">
            <h2 style="color:#E8824A">Новая заявка с сайта СеверПолимер</h2>
            <table>
              <tr><td><b>Имя:</b></td><td>{name}</td></tr>
              <tr><td><b>Телефон:</b></td><td>{phone}</td></tr>
              <tr><td><b>Направление:</b></td><td>{category or 'не указано'}</td></tr>
              <tr><td><b>Комментарий:</b></td><td>{comment or 'не указан'}</td></tr>
            </table>
            </body></html>
            """
            msg.attach(MIMEText(html_body, 'html', 'utf-8'))

            with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
                server.login(smtp_login, smtp_password)
                server.sendmail(smtp_login, email_to, msg.as_string())
        except Exception as e:
            errors.append(f'Email: {str(e)}')

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True, 'errors': errors})
    }
