export const HERO_IMAGE = "https://cdn.poehali.dev/projects/6345cfc5-d22b-43a1-a9a7-d19fdac3293e/files/a19d6ae9-0085-4fe8-8524-2b93c8adacab.jpg";
export const CONTAINER_IMAGE = "https://cdn.poehali.dev/projects/6345cfc5-d22b-43a1-a9a7-d19fdac3293e/files/51ae64c2-d616-4574-88cb-11af57e2c110.jpg";
export const BANYA_IMAGE = "https://cdn.poehali.dev/projects/6345cfc5-d22b-43a1-a9a7-d19fdac3293e/files/34b8b3b8-21ac-45df-807f-feca6d49eec0.jpg";

export const NAV_ITEMS = [
  { id: "bytovki", label: "Бытовки" },
  { id: "doma", label: "Дома" },
  { id: "blok-konteinery", label: "Блок-контейнеры" },
  { id: "bani", label: "Бани" },
  { id: "xozbloki", label: "Хозблоки" },
  { id: "portfolio", label: "Портфолио" },
  { id: "contacts", label: "Контакты" },
];

export const PRODUCTS = [
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

export const PORTFOLIO_ITEMS = [
  { title: "Вахтовый посёлок, ЯНАО", type: "Бытовки × 24 шт.", year: "2023", image: CONTAINER_IMAGE },
  { title: "Жилой дом, Тюмень", type: "Модульный дом 72 м²", year: "2024", image: HERO_IMAGE },
  { title: "База отдыха, Нягань", type: "Бани × 6 шт.", year: "2023", image: BANYA_IMAGE },
  { title: "Строительная площадка", type: "Блок-контейнеры × 8 шт.", year: "2024", image: CONTAINER_IMAGE },
  { title: "Садовый участок, Сургут", type: "Хозблоки × 12 шт.", year: "2024", image: HERO_IMAGE },
  { title: "Охрана промзоны, ХМАО", type: "Блок-контейнеры × 3 шт.", year: "2023", image: CONTAINER_IMAGE },
];

export const STATS = [
  { value: "12+", label: "лет на рынке" },
  { value: "2 500+", label: "объектов сдано" },
  { value: "47", label: "регионов России" },
  { value: "100%", label: "собственное производство" },
];
