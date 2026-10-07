import type { Locale } from '../i18n';
import { switchLocalePath } from '../i18n';
import type { ProductGroup } from '../content/site';

export const SITE_ORIGIN = 'https://zooembrio.ru';
export const OG_IMAGE = `${SITE_ORIGIN}/images/technology/technology-cycle.jpg`;

export type FaqItem = { question: string; answer: string };

export type PageSeo = {
  title: string;
  description: string;
  faqs?: FaqItem[];
};

const pageSeo: Record<string, Record<Locale, PageSeo>> = {
  home: {
    ru: {
      title: 'ZOOEMBRIO — среды АРТ для лошадей и КРС | российский производитель',
      description:
        'Российский производитель сред АРТ для лошадей и КРС: TSM-Asp, Wash, ViT, WaM. Локальные поставки, протоколы, паспорта партий. Заявка на zooembrio.ru.',
      faqs: [
        {
          question: 'Что производит ZOOEMBRIO?',
          answer:
            'ZOOEMBRIO — российский производитель готовых сред для вспомогательных репродуктивных технологий у лошадей и крупного рогатого скота: вымывание, отмывка, витрификация и девитрификация.',
        },
        {
          question: 'Чем ZOOEMBRIO отличается от импортных наборов?',
          answer:
            'Локальное стерильное производство в РФ, русскоязычный протокол, паспорта партий и предсказуемые сроки отгрузки без импортной логистики. Не «дешевле ради дешевле», а стабильная поставка в сезон.',
        },
        {
          question: 'ZOOEMBRIO и Zebuembryo — это одно и то же?',
          answer:
            'Нет. ZOOEMBRIO (zooembrio.ru) — российский производитель сред АРТ. Zebuembryo — другая организация (Бразилия, генетика КРС). Клиники ЭКО «Эмбрио» также не связаны с нами.',
        },
      ],
    },
    en: {
      title: 'ZOOEMBRIO — ART media for horses and cattle | made in Russia',
      description:
        'Russian manufacturer of ART media for equine and bovine labs: TSM-Asp, Wash, ViT, WaM. Local supply, protocols, lot certificates. Request at zooembrio.ru/en.',
      faqs: [
        {
          question: 'What does ZOOEMBRIO make?',
          answer:
            'ZOOEMBRIO is a Russian manufacturer of ready-to-use ART media for horses and cattle: washing, rinsing, vitrification and warming.',
        },
        {
          question: 'How is ZOOEMBRIO different from imported kits?',
          answer:
            'Domestic sterile manufacturing in Russia, application protocols, lot certificates and predictable shipping without import lead times.',
        },
        {
          question: 'Is ZOOEMBRIO the same as Zebuembryo?',
          answer:
            'No. ZOOEMBRIO (zooembrio.ru) is a Russian ART media manufacturer. Zebuembryo is a different organisation. Human IVF clinics named «Эмбрио» are unrelated.',
        },
      ],
    },
  },
  technology: {
    ru: {
      title: 'Технология OPU и витрификации ооцитов лошадей | ZOOEMBRIO',
      description:
        'Протокол in vivo для лошадей: вымывание TSM-Asp, отмывка Wash, витрификация ViT1/ViT2, девитрификация WaM1–3. Этапы и среды ZOOEMBRIO.',
      faqs: [
        {
          question: 'Какие этапы закрывает протокол ZOOEMBRIO для лошадей?',
          answer:
            'Четыре последовательных этапа после аспирации: вымывание (TSM-Asp), отмывка (Wash), витрификация (ViT1/ViT2) и девитрификация (WaM1/WaM2/WaM3).',
        },
        {
          question: 'Что такое TSM-Asp?',
          answer:
            'TSM-Asp — среда для вымывания ооцитов на этапе аспирации и первичной обработки фолликулярной жидкости. Поставляется в инфузионных мешках 1000 и 3000 мл.',
        },
        {
          question: 'Зачем нужны ViT и WaM?',
          answer:
            'ViT1/ViT2 — набор для витрификации ооцитов и эмбрионов лошадей. WaM1/WaM2/WaM3 — поэтапная девитрификация перед дальнейшей работой или переносом.',
        },
      ],
    },
    en: {
      title: 'Equine OPU and oocyte vitrification protocol | ZOOEMBRIO',
      description:
        'Equine in vivo protocol: TSM-Asp washing, Wash rinse, ViT1/ViT2 vitrification, WaM1–3 warming. Stages and media from ZOOEMBRIO.',
      faqs: [
        {
          question: 'Which stages does the ZOOEMBRIO equine protocol cover?',
          answer:
            'Four stages after aspiration: washing (TSM-Asp), rinse (Wash), vitrification (ViT1/ViT2) and warming (WaM1/WaM2/WaM3).',
        },
        {
          question: 'What is TSM-Asp?',
          answer:
            'TSM-Asp is a washing medium for oocyte aspiration and primary follicular-fluid handling. Supplied in 1000 and 3000 ml infusion bags.',
        },
        {
          question: 'What are ViT and WaM for?',
          answer:
            'ViT1/ViT2 is the vitrification kit for equine oocytes and embryos. WaM1/WaM2/WaM3 is the stepwise warming set before further work or transfer.',
        },
      ],
    },
  },
  products: {
    ru: {
      title: 'Среды АРТ для лошадей: TSM-Asp, Wash, ViT, WaM | купить ZOOEMBRIO',
      description:
        'Каталог сред ZOOEMBRIO для лошадей: вымывание TSM-Asp, отмывка Wash, витрификация ViT1/ViT2, девитрификация WaM. Российский производитель, заявка на прайс.',
      faqs: [
        {
          question: 'Какие среды входят в линейку для лошадей?',
          answer:
            'TSM-Asp (вымывание, мешки 1000/3000 мл), Wash (отмывка, флаконы 50/100 мл), ViT1/ViT2 (витрификация), WaM1/WaM2/WaM3 (девитрификация).',
        },
        {
          question: 'Как заказать среды ZOOEMBRIO?',
          answer:
            'Оставьте заявку на странице контактов или через корзину B2B на сайте. Пришлём прайс, протокол и документы партий под ваш объём.',
        },
        {
          question: 'Есть ли среды для КРС в каталоге?',
          answer:
            'Направление КРС в запуске на том же стандарте качества. Актуальный статус и заявка на ранний доступ — на странице /cattle/.',
        },
      ],
    },
    en: {
      title: 'Equine ART media: TSM-Asp, Wash, ViT, WaM | ZOOEMBRIO',
      description:
        'ZOOEMBRIO equine media catalogue: TSM-Asp wash, Wash rinse, ViT1/ViT2 vitrification, WaM warming. Russian manufacturer — request a price list.',
      faqs: [
        {
          question: 'Which media are in the equine line?',
          answer:
            'TSM-Asp (wash, 1000/3000 ml bags), Wash (50/100 ml vials), ViT1/ViT2 (vitrification), WaM1/WaM2/WaM3 (warming).',
        },
        {
          question: 'How do I order ZOOEMBRIO media?',
          answer:
            'Send a request via the contact page or the B2B cart. We reply with pricing, protocol and lot documents for your volume.',
        },
        {
          question: 'Do you list cattle media yet?',
          answer:
            'The bovine line is launching under the same QC standard. Status and early-access requests are on /en/cattle/.',
        },
      ],
    },
  },
  cattle: {
    ru: {
      title: 'Среды АРТ для КРС — российский производитель | ZOOEMBRIO',
      description:
        'ZOOEMBRIO запускает среды АРТ для крупного рогатого скота: OPU, отмывка, витрификация. Локальное производство в РФ, протоколы, ранний доступ.',
      faqs: [
        {
          question: 'Производит ли ZOOEMBRIO среды для КРС?',
          answer:
            'Да — направление сред АРТ для крупного рогатого скота в запуске. Тот же стандарт стерильного производства, протоколов и документов партий, что и у линейки для лошадей.',
        },
        {
          question: 'Можно ли уже заказать среды для ЭКО / OPU коров?',
          answer:
            'Откройте ранний доступ: опишите протокол (OPU / ЭКО / витрификация) через форму — согласуем стартовый комплект и документы. SKU публикуем по мере серийного выпуска.',
        },
        {
          question: 'Лошади остаются в ассортименте?',
          answer:
            'Да. Equine-линейка TSM-Asp, Wash, ViT и WaM в серийном выпуске. КРС дополняет портфель, не заменяет лошадей.',
        },
      ],
    },
    en: {
      title: 'Bovine ART media — Russian manufacturer | ZOOEMBRIO',
      description:
        'ZOOEMBRIO is launching ART media for cattle: OPU, wash, vitrification. Local manufacturing in Russia, protocols, early access.',
      faqs: [
        {
          question: 'Does ZOOEMBRIO make cattle media?',
          answer:
            'Yes — bovine ART media is launching under the same sterile manufacturing, protocol and lot-document standard as our equine line.',
        },
        {
          question: 'Can I order bovine OPU / IVF media now?',
          answer:
            'Request early access: describe your protocol via the form — we align a starter set and documents. SKUs are published as serial production rolls out.',
        },
        {
          question: 'Does equine remain available?',
          answer:
            'Yes. The equine line (TSM-Asp, Wash, ViT, WaM) stays in serial production. Cattle complements equine; it does not replace it.',
        },
      ],
    },
  },
  about: {
    ru: {
      title: 'Производство сред АРТ — ISO, MEA, контроль партий | ZOOEMBRIO',
      description:
        'Стерильное производство ZOOEMBRIO в России: сертификация ISO, контроль MEA и эндотоксинов, паспорта партий сред для лошадей и КРС.',
      faqs: [
        {
          question: 'Какой контроль качества у сред ZOOEMBRIO?',
          answer:
            'Стерильный выпуск, входной контроль сырья, выпускной контроль партии, тесты MEA и на эндотоксины. Каждая партия сопровождается документами.',
        },
        {
          question: 'Где находится производство?',
          answer:
            'Собственная производственная площадка в России. Контактный офис: Москва, БЦ G10. Поставки по РФ.',
        },
      ],
    },
    en: {
      title: 'ART media manufacturing — ISO, MEA, lot control | ZOOEMBRIO',
      description:
        'ZOOEMBRIO sterile manufacturing in Russia: ISO certification, MEA and endotoxin control, lot certificates for equine and bovine media.',
      faqs: [
        {
          question: 'What quality controls does ZOOEMBRIO run?',
          answer:
            'Sterile release, incoming raw-material checks, lot release testing, MEA and endotoxin tests. Every lot ships with documentation.',
        },
        {
          question: 'Where do you manufacture?',
          answer:
            'Our own manufacturing site in Russia. Contact office: Moscow, BC G10. Shipping across the Russian Federation.',
        },
      ],
    },
  },
  contact: {
    ru: {
      title: 'Контакты ZOOEMBRIO — запрос прайса и протоколов',
      description:
        'Связаться с ZOOEMBRIO: прайс по средам АРТ для лошадей и КРС, протоколы, документы партий. Тел. +7 (909) 169-22-14, info@zooembrio.ru.',
    },
    en: {
      title: 'Contact ZOOEMBRIO — price list and protocols',
      description:
        'Contact ZOOEMBRIO for equine and bovine ART media pricing, protocols and lot documents. Phone +7 (909) 169-22-14, info@zooembrio.ru.',
    },
  },
};

export function getPageSeo(page: keyof typeof pageSeo, locale: Locale): PageSeo {
  return pageSeo[page][locale];
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZOOEMBRIO',
    url: `${SITE_ORIGIN}/`,
    logo: `${SITE_ORIGIN}/images/logo/art-logo.png`,
    email: 'info@zooembrio.ru',
    telephone: '+7-909-169-22-14',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Moscow',
      addressCountry: 'RU',
      streetAddress: 'Kyivskoye shosse, 21st km, 3s1, BC G10',
    },
    description:
      'Russian manufacturer of ART media for horses and cattle: washing, rinsing, vitrification and warming.',
    sameAs: [] as string[],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${SITE_ORIGIN}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function productListJsonLd(groups: ProductGroup[], locale: Locale) {
  const productsPath = locale === 'ru' ? '/products/' : '/en/products/';
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: groups.map((group, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: group.name,
        description: group.description,
        brand: { '@type': 'Brand', name: 'ZOOEMBRIO' },
        category: 'ART media',
        url: `${SITE_ORIGIN}${productsPath}#${group.id}`,
        image: `${SITE_ORIGIN}/images/products/${group.id === 'tsm-asp' ? 'tsm-asp' : group.id}.jpg`,
        manufacturer: {
          '@type': 'Organization',
          name: 'ZOOEMBRIO',
          url: `${SITE_ORIGIN}/`,
        },
      },
    })),
  };
}

export function hreflangAlternates(pathname: string) {
  const ruPath = switchLocalePath(pathname, 'ru');
  const enPath = switchLocalePath(pathname, 'en');
  const withSlash = (path: string) => (path.endsWith('/') || path.includes('.') ? path : `${path}/`);
  return {
    ru: `${SITE_ORIGIN}${withSlash(ruPath === '/' ? '/' : ruPath)}`,
    en: `${SITE_ORIGIN}${withSlash(enPath)}`,
    xDefault: `${SITE_ORIGIN}${withSlash(ruPath === '/' ? '/' : ruPath)}`,
  };
}
