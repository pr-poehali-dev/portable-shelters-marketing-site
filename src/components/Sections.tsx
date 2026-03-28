import Icon from "@/components/ui/icon";
import AnimatedSection from "@/components/AnimatedSection";
import { HERO_IMAGE, PRODUCTS, PORTFOLIO_ITEMS, STATS, NAV_ITEMS } from "@/components/constants";

interface ScrollProps {
  onScrollTo: (id: string) => void;
}

export function HeroSection({ onScrollTo }: ScrollProps) {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-[#1A1614]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1614]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#E8824A]" />
            <span className="text-[#E8824A] font-display uppercase tracking-[0.3em] text-sm font-medium">Производство с 2012 года</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-black text-white uppercase leading-none tracking-tight mb-8">
            Строим.<br />
            <span className="text-[#E8824A]">Быстро.</span><br />
            Надёжно.
          </h1>
          <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-xl">
            Собственное производство модульных зданий в ХМАО–Югре. Бытовки, дома, бани, блок-контейнеры и хозблоки — под ключ.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onScrollTo("bytovki")}
              className="bg-[#E8824A] text-white px-8 py-4 font-display text-sm uppercase tracking-wider font-semibold hover:bg-[#D4703A] transition-colors"
            >
              Смотреть продукцию
            </button>
            <button
              onClick={() => onScrollTo("contacts")}
              className="border border-white/40 text-white px-8 py-4 font-display text-sm uppercase tracking-wider font-semibold hover:bg-white/10 transition-colors"
            >
              Получить расчёт
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        <span className="text-white/40 text-xs uppercase tracking-widest" style={{ writingMode: "vertical-rl" }}>scroll</span>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="bg-[#1A1614] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <AnimatedSection key={i} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-black text-[#E8824A] mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductsSection({ onScrollTo }: ScrollProps) {
  return (
    <>
      {PRODUCTS.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-24 ${index % 2 === 0 ? "bg-[#F5F3F0]" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={`relative ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div
                      className="absolute top-6 left-6 px-4 py-2 text-white font-display text-sm uppercase tracking-widest font-semibold"
                      style={{ backgroundColor: product.accent }}
                    >
                      {product.subtitle}
                    </div>
                  </div>
                  <div
                    className="absolute -bottom-4 -right-4 w-24 h-24 -z-10 opacity-10"
                    style={{ backgroundColor: product.accent }}
                  />
                </div>

                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[2px]" style={{ backgroundColor: product.accent }} />
                    <span className="text-sm uppercase tracking-[0.25em] font-medium text-[#6B7280]">
                      {product.subtitle}
                    </span>
                  </div>

                  <h2 className="font-display text-5xl md:text-7xl font-black uppercase text-[#1A1614] leading-none mb-6">
                    {product.title}
                  </h2>

                  <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                    {product.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#1A1614]">
                        <div className="flex-shrink-0" style={{ color: product.accent }}>
                          <Icon name="Check" size={16} />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="text-[#6B7280] text-sm uppercase tracking-wider mb-1">Стоимость</div>
                      <div className="font-display text-3xl font-bold text-[#1A1614]">{product.price}</div>
                    </div>
                    <button
                      onClick={() => onScrollTo("contacts")}
                      className="px-7 py-3.5 text-white font-display text-sm uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: product.accent }}
                    >
                      Заказать расчёт
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}
    </>
  );
}

export function WhyUsSection() {
  const items = [
    { icon: "Factory", title: "Собственное производство", desc: "Полный цикл изготовления на собственных мощностях в ХМАО. Никаких посредников — только качество." },
    { icon: "Truck", title: "Доставка по России", desc: "Организуем доставку в любой регион страны. Работаем с транспортными компаниями-партнёрами." },
    { icon: "Clock", title: "Сроки без срывов", desc: "Производим в оговорённые сроки. Журнал производства в реальном времени для каждого заказа." },
    { icon: "Wrench", title: "Монтаж под ключ", desc: "Команда монтажников выезжает на объект. Устанавливаем, подключаем коммуникации, сдаём готовое." },
    { icon: "Shield", title: "Гарантия 3 года", desc: "Даём официальную гарантию на все конструкции. При необходимости — гарантийный ремонт." },
    { icon: "Headphones", title: "Поддержка 24/7", desc: "Менеджер на связи в любое время. Консультируем по выбору, проекту и монтажу." },
  ];

  return (
    <section className="bg-[#1A1614] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#E8824A]" />
            <span className="text-[#E8824A] text-sm uppercase tracking-[0.25em] font-medium">Почему мы</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase text-white leading-none mb-16">
            Наши<br /><span className="text-[#E8824A]">преимущества</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <AnimatedSection key={i}>
              <div className="border border-white/10 p-8 hover:border-[#E8824A]/50 transition-colors duration-300 group">
                <div className="w-12 h-12 bg-[#E8824A]/10 flex items-center justify-center mb-6 group-hover:bg-[#E8824A]/20 transition-colors">
                  <Icon name={item.icon as "Factory"} size={22} className="text-[#E8824A]" />
                </div>
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-[#F5F3F0]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#E8824A]" />
                <span className="text-[#E8824A] text-sm uppercase tracking-[0.25em] font-medium">Наши работы</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl font-black uppercase text-[#1A1614] leading-none">
                Портфолио
              </h2>
            </div>
            <div className="font-display text-lg text-[#6B7280] uppercase tracking-wider">2 500+ объектов</div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <AnimatedSection key={i}>
              <div className="group relative overflow-hidden aspect-[4/3] cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[#E8824A]/0 group-hover:bg-[#E8824A]/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[#E8824A] text-xs uppercase tracking-widest font-medium mb-1">{item.type} · {item.year}</div>
                  <div className="text-white font-display text-lg font-bold uppercase">{item.title}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection({ onScrollTo }: ScrollProps) {
  return (
    <section className="relative py-28 overflow-hidden bg-[#E8824A]">
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/40 rounded-full"
            style={{
              width: `${160 + i * 100}px`,
              height: `${160 + i * 100}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase text-white leading-none mb-6">
            Готовы обсудить<br />ваш проект?
          </h2>
          <p className="text-white/80 text-xl mb-10 leading-relaxed">
            Оставьте заявку — перезвоним в течение 15 минут и рассчитаем стоимость бесплатно
          </p>
          <button
            onClick={() => onScrollTo("contacts")}
            className="bg-white text-[#E8824A] px-10 py-5 font-display text-base uppercase tracking-wider font-bold hover:bg-[#1A1614] hover:text-white transition-colors duration-300"
          >
            Получить бесплатный расчёт
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}

export function ContactsSection() {
  return (
    <section id="contacts" className="py-24 bg-[#1A1614]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#E8824A]" />
              <span className="text-[#E8824A] text-sm uppercase tracking-[0.25em] font-medium">Свяжитесь с нами</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-white leading-none mb-10">
              Контакты
            </h2>

            <div className="space-y-8">
              {[
                { icon: "Phone", label: "Телефон", content: <a href="tel:+73462000000" className="text-white text-xl font-semibold hover:text-[#E8824A] transition-colors">+7 (3462) 00-00-00</a> },
                { icon: "Mail", label: "Email", content: <a href="mailto:info@severpolimer.ru" className="text-white text-xl font-semibold hover:text-[#E8824A] transition-colors">info@severpolimer.ru</a> },
                { icon: "MapPin", label: "Адрес производства", content: <div className="text-white text-lg font-semibold leading-relaxed">ХМАО–Югра, г. Сургут<br />ул. Промышленная, д. 1</div> },
                { icon: "Clock", label: "Режим работы", content: <div><div className="text-white text-lg font-semibold">Пн–Пт: 8:00 – 18:00</div><div className="text-white/60 text-sm">Сб–Вс: по договорённости</div></div> },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#E8824A]/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as "Phone"} size={20} className="text-[#E8824A]" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors">
                <Icon name="MessageCircle" size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors">
                <Icon name="Send" size={18} />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white/5 border border-white/10 p-10">
              <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-8">
                Оставить заявку
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/30 px-4 py-3.5 focus:outline-none focus:border-[#E8824A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (000) 000-00-00"
                    className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/30 px-4 py-3.5 focus:outline-none focus:border-[#E8824A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Что вас интересует?</label>
                  <select className="w-full bg-[#1A1614] border border-white/20 text-white px-4 py-3.5 focus:outline-none focus:border-[#E8824A] transition-colors">
                    <option value="">Выберите направление</option>
                    <option>Бытовки</option>
                    <option>Дома</option>
                    <option>Блок-контейнеры</option>
                    <option>Бани</option>
                    <option>Хозблоки</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Комментарий</label>
                  <textarea
                    rows={3}
                    placeholder="Размеры, количество, особые требования..."
                    className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/30 px-4 py-3.5 focus:outline-none focus:border-[#E8824A] transition-colors resize-none"
                  />
                </div>
                <button className="w-full bg-[#E8824A] text-white py-4 font-display text-sm uppercase tracking-wider font-bold hover:bg-[#D4703A] transition-colors">
                  Отправить заявку
                </button>
                <p className="text-white/30 text-xs text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export function Footer({ onScrollTo }: ScrollProps) {
  return (
    <footer className="bg-[#0F0D0C] py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#E8824A] flex items-center justify-center">
            <Icon name="Building2" size={14} className="text-white" />
          </div>
          <span className="font-display text-base font-bold text-white tracking-widest uppercase">СеверПолимер</span>
        </div>
        <div className="text-white/30 text-sm text-center">
          © 2012–2026 ООО «СеверПолимер». Все права защищены.
        </div>
        <div className="hidden md:flex gap-6">
          {NAV_ITEMS.slice(0, 5).map(item => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className="text-white/30 text-xs uppercase tracking-wider hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
