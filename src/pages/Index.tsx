import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/6345cfc5-d22b-43a1-a9a7-d19fdac3293e/files/a19d6ae9-0085-4fe8-8524-2b93c8adacab.jpg";
const CONTAINER_IMAGE = "https://cdn.poehali.dev/projects/6345cfc5-d22b-43a1-a9a7-d19fdac3293e/files/51ae64c2-d616-4574-88cb-11af57e2c110.jpg";
const BANYA_IMAGE = "https://cdn.poehali.dev/projects/6345cfc5-d22b-43a1-a9a7-d19fdac3293e/files/34b8b3b8-21ac-45df-807f-feca6d49eec0.jpg";

const NAV_ITEMS = [
  { id: "bytovki", label: "Бытовки" },
  { id: "doma", label: "Дома" },
  { id: "blok-konteinery", label: "Блок-контейнеры" },
  { id: "bani", label: "Бани" },
  { id: "xozbloki", label: "Хозблоки" },
  { id: "portfolio", label: "Портфолио" },
  { id: "contacts", label: "Контакты" },
];

const PRODUCTS = [
  {
    id: "bytovki",
    title: "Бытовки",
    subtitle: "Вахтовые и строительные",
    description: "Мобильные бытовые помещения для строительных площадок, вахтовых посёлков и временного размещения. Каркасная конструкция из профильной трубы, сэндвич-панели, быстрый монтаж.",
    features: ["Утепление 50–100 мм", "Стандарт 6×2,4 м и 8×2,4 м", "Монтаж за 1 день", "Перевозка любым транспортом"],
    price: "от 85 000 ₽",
    image: CONTAINER_IMAGE,
    accent: "#E8824A",
  },
  {
    id: "doma",
    title: "Дома",
    subtitle: "Модульные жилые",
    description: "Полноценные жилые дома модульной конструкции — от дачных до круглогодичных. Быстровозводимые, энергоэффективные, с отделкой на выбор.",
    features: ["Площадь 24–120 м²", "Круглогодичное проживание", "Готовая внутренняя отделка", "Срок изготовления 30–60 дней"],
    price: "от 450 000 ₽",
    image: HERO_IMAGE,
    accent: "#4A7E8E",
  },
  {
    id: "blok-konteinery",
    title: "Блок-контейнеры",
    subtitle: "Промышленные и офисные",
    description: "Универсальные металлические контейнеры для офисов, складов, охраны и промышленных нужд. Высокая прочность, долговечность, быстрое переоборудование.",
    features: ["Сталь 3 мм", "Размеры 20 и 40 футов", "Штабелирование до 4 уровней", "Электрика в комплекте"],
    price: "от 120 000 ₽",
    image: CONTAINER_IMAGE,
    accent: "#6B7280",
  },
  {
    id: "bani",
    title: "Бани",
    subtitle: "Деревянные и каркасные",
    description: "Бани из профилированного бруса и по каркасной технологии. Классическая русская парная, финская сауна, комната отдыха. Под ключ с печью и полками.",
    features: ["Брус 150×150 или каркас", "Площадь 15–36 м²", "Печь в комплекте", "Усадка учтена в проекте"],
    price: "от 220 000 ₽",
    image: BANYA_IMAGE,
    accent: "#8B5E3C",
  },
  {
    id: "xozbloki",
    title: "Хозблоки",
    subtitle: "Садовые и дачные",
    description: "Компактные хозяйственные постройки для хранения инструментов, велосипедов, садового инвентаря. Долговечный каркас, надёжная кровля.",
    features: ["Размеры 2×3 м — 3×6 м", "Двойная дверь", "Вентиляция", "Окраска в любой цвет RAL"],
    price: "от 45 000 ₽",
    image: HERO_IMAGE,
    accent: "#5A7A3A",
  },
];

const PORTFOLIO_ITEMS = [
  { title: "Вахтовый посёлок, ЯНАО", type: "Бытовки × 24 шт.", year: "2023", image: CONTAINER_IMAGE },
  { title: "Жилой дом, Тюмень", type: "Модульный дом 72 м²", year: "2024", image: HERO_IMAGE },
  { title: "База отдыха, Нягань", type: "Бани × 6 шт.", year: "2023", image: BANYA_IMAGE },
  { title: "Строительная площадка", type: "Блок-контейнеры × 8 шт.", year: "2024", image: CONTAINER_IMAGE },
  { title: "Садовый участок, Сургут", type: "Хозблоки × 12 шт.", year: "2024", image: HERO_IMAGE },
  { title: "Охрана промзоны, ХМАО", type: "Блок-контейнеры × 3 шт.", year: "2023", image: CONTAINER_IMAGE },
];

const STATS = [
  { value: "12+", label: "лет на рынке" },
  { value: "2 500+", label: "объектов сдано" },
  { value: "47", label: "регионов России" },
  { value: "100%", label: "собственное производство" },
];

function useIntersection(ref: React.RefObject<HTMLElement>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return visible;
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIntersection(ref as React.RefObject<HTMLElement>);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const current = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F3F0] font-body">

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#1A1614]/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#E8824A] flex items-center justify-center">
              <Icon name="Building2" size={18} className="text-white" />
            </div>
            <span className="font-display text-xl font-bold text-white tracking-widest uppercase">СеверПолимер</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium tracking-wider uppercase transition-colors ${activeSection === item.id ? "text-[#E8824A]" : "text-white/70 hover:text-white"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href="tel:+73462000000"
            className="hidden lg:flex items-center gap-2 bg-[#E8824A] text-white px-5 py-2.5 text-sm font-semibold tracking-wider uppercase hover:bg-[#D4703A] transition-colors"
          >
            <Icon name="Phone" size={14} />
            +7 (3462) 00-00-00
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white">
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#1A1614] border-t border-white/10 px-6 py-6">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-3 text-white/80 hover:text-[#E8824A] font-display uppercase tracking-wider text-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a href="tel:+73462000000" className="mt-4 flex items-center gap-2 text-[#E8824A] font-semibold">
              <Icon name="Phone" size={16} />
              +7 (3462) 00-00-00
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
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
                onClick={() => scrollTo("bytovki")}
                className="bg-[#E8824A] text-white px-8 py-4 font-display text-sm uppercase tracking-wider font-semibold hover:bg-[#D4703A] transition-colors"
              >
                Смотреть продукцию
              </button>
              <button
                onClick={() => scrollTo("contacts")}
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

      {/* STATS */}
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

      {/* PRODUCTS */}
      {PRODUCTS.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-24 ${index % 2 === 0 ? "bg-[#F5F3F0]" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
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
                      onClick={() => scrollTo("contacts")}
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

      {/* WHY US */}
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
            {[
              { icon: "Factory", title: "Собственное производство", desc: "Полный цикл изготовления на собственных мощностях в ХМАО. Никаких посредников — только качество." },
              { icon: "Truck", title: "Доставка по России", desc: "Организуем доставку в любой регион страны. Работаем с транспортными компаниями-партнёрами." },
              { icon: "Clock", title: "Сроки без срывов", desc: "Производим в оговорённые сроки. Журнал производства в реальном времени для каждого заказа." },
              { icon: "Wrench", title: "Монтаж под ключ", desc: "Команда монтажников выезжает на объект. Устанавливаем, подключаем коммуникации, сдаём готовое." },
              { icon: "Shield", title: "Гарантия 3 года", desc: "Даём официальную гарантию на все конструкции. При необходимости — гарантийный ремонт." },
              { icon: "Headphones", title: "Поддержка 24/7", desc: "Менеджер на связи в любое время. Консультируем по выбору, проекту и монтажу." },
            ].map((item, i) => (
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

      {/* PORTFOLIO */}
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

      {/* CTA */}
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
              onClick={() => scrollTo("contacts")}
              className="bg-white text-[#E8824A] px-10 py-5 font-display text-base uppercase tracking-wider font-bold hover:bg-[#1A1614] hover:text-white transition-colors duration-300"
            >
              Получить бесплатный расчёт
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACTS */}
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

      {/* FOOTER */}
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
                onClick={() => scrollTo(item.id)}
                className="text-white/30 text-xs uppercase tracking-wider hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
