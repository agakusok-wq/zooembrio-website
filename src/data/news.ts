export type NewsLocale = 'ru' | 'en';

export type NewsCta = 'cattle' | 'products' | 'technology' | 'about' | 'contact';

export type NewsArticle = {
  slug: string;
  date: string; // ISO YYYY-MM-DD
  primaryCta: NewsCta;
  locales: {
    ru: { title: string; excerpt: string; metaDescription: string; body: string[] };
    en: { title: string; excerpt: string; metaDescription: string; body: string[] };
  };
};

export const newsArticles: NewsArticle[] = [
  {
    slug: 'cattle-art-media-launch',
    date: '2026-10-07',
    primaryCta: 'cattle',
    locales: {
      ru: {
        title: 'ZOOEMBRIO выходит на рынок сред АРТ для крупного рогатого скота',
        excerpt:
          'К линейке для лошадей добавляем направления для КРС: тот же стандарт производства, протоколы и документы партий — теперь и для лабораторий, работающих с коровами.',
        metaDescription:
          'Российский производитель ZOOEMBRIO запускает среды АРТ для КРС: OPU, отмывка, витрификация. Локальные поставки и протоколы — заявка на zooembrio.ru/cattle.',
        body: [
          'ZOOEMBRIO — российский производитель сред для вспомогательных репродуктивных технологий — расширяет портфель: после серийной линейки для лошадей запускаем направление сред АРТ для крупного рогатого скота.',
          'Для лабораторий и племенных хозяйств это означает единого поставщика по двум видам: лошади и КРС. Локальное стерильное производство, паспорта партий, контроль MEA и эндотоксинов, русскоязычные протоколы и предсказуемые сроки отгрузки по РФ — без ожидания импортной поставки.',
          'Линейка для КРС строится по той же логике этапов, что и equine-направление: среды под вымывание / работу с ооцитами и эмбрионами, отмывку, витрификацию и девитрификацию. Конкретные фасовки и артикулы согласуем под протокол лаборатории — оставьте заявку на странице КРС или в контактах.',
          'Лошади остаются полноценным действующим направлением: TSM-Asp, Wash, ViT1/ViT2 и WaM1/WaM2/WaM3 по-прежнему в серийном выпуске. Расширение на КРС не заменяет equine-линейку, а дополняет её.',
          'Если вы планируете сезон OPU / ЭКО КРС или ищете российскую альтернативу импортным наборам — напишите нам: подберём стартовый комплект, вышлем протокол и документы по партиям.',
        ],
      },
      en: {
        title: 'ZOOEMBRIO launches ART media for cattle',
        excerpt:
          'Alongside our equine line we are opening bovine ART media: the same manufacturing standard, protocols and lot documentation — now for cattle labs as well.',
        metaDescription:
          'ZOOEMBRIO, a Russian ART media manufacturer, launches bovine media for OPU, wash and vitrification. Local supply and protocols — request at zooembrio.ru/en/cattle.',
        body: [
          'ZOOEMBRIO — a Russian manufacturer of assisted reproductive technology media — is expanding: after the serial equine line we are launching ART media for cattle (bovine).',
          'Labs and breeding operations get one Russian manufacturer for two species — horses and cattle. Local sterile production, lot certificates, MEA and endotoxin control, application protocols and predictable shipping inside Russia — without waiting on import logistics.',
          'The cattle line follows the same stage logic as our equine range: media for aspiration / oocyte–embryo handling, washing, vitrification and warming. Exact pack sizes and SKUs are aligned to your lab protocol — request details on the cattle page or via contact form.',
          'Equine remains a full active line: TSM-Asp, Wash, ViT1/ViT2 and WaM1/WaM2/WaM3 stay in serial production. Cattle expansion complements equine; it does not replace it.',
          'If you are planning a bovine OPU / IVF season or need a Russian alternative to imported kits — contact us for a starter set, protocol and lot documentation.',
        ],
      },
    },
  },
  {
    slug: 'choosing-opu-media-cattle-russia',
    date: '2026-08-15',
    primaryCta: 'cattle',
    locales: {
      ru: {
        title: 'Как выбрать среды для OPU и витрификации КРС в России',
        excerpt:
          'На что смотреть лаборатории ЭКО КРС при выборе сред: вид животного, этапы протокола, документы партии, сроки поставки и поддержка на русском.',
        metaDescription:
          'Чеклист выбора сред для OPU и витрификации эмбрионов КРС в России: протокол, MEA, логистика, российский производитель ZOOEMBRIO.',
        body: [
          'Среды для ЭКО и OPU крупного рогатого скота в России чаще всего ищут как импортные наборы через дистрибьюторов. Перед сезоном лаборатории важно сверить не только цену, но и то, под какой вид и этап протокола среда предназначена.',
          'Первый критерий — соответствие виду: bovine-наборы не подменяют equine и наоборот. Второй — покрытие этапов: аспирация / вымывание, отмывка, витрификация, девитрификация. Третий — документы: паспорт партии, контроль эндотоксинов и эмбриотоксичности (MEA), понятный протокол применения.',
          'Четвёртый критерий для российских программ — логистика. Импортные сроки и температура хранения критичны в пик сезона; локальный производитель сокращает риск срыва отгрузки.',
          'ZOOEMBRIO запускает линейку сред АРТ для КРС на том же стандарте, что и серийная equine-линейка: стерильное производство в РФ, протоколы и паспорта партий. Артикулы и фасовки согласуем под ваш протокол — без обещания «универсальной» замены всех импортных SKU одной строкой каталога.',
          'Практический шаг: опишите ваш протокол (OPU / IVF / витрификация) на странице КРС или в форме контакта — вернёмся с предложением стартового комплекта и перечнем документов.',
        ],
      },
      en: {
        title: 'How to choose OPU and vitrification media for cattle in Russia',
        excerpt:
          'What bovine IVF labs should check: species fit, protocol stages, lot documents, lead times and local support.',
        metaDescription:
          'Checklist for choosing bovine OPU and embryo vitrification media in Russia: protocol, MEA, logistics, Russian manufacturer ZOOEMBRIO.',
        body: [
          'Bovine OPU / IVF media in Russia are often sourced as imported kits via distributors. Before the season, labs should verify more than price: species fit and protocol stage matter.',
          'First — species: bovine kits are not equine kits. Second — stage coverage: aspiration / wash, wash media, vitrification, warming. Third — documentation: lot certificate, endotoxin and MEA control, a clear application protocol.',
          'Fourth for Russian programmes — logistics. Import lead times and cold-chain risk peak in season; a domestic manufacturer reduces stock-out risk.',
          'ZOOEMBRIO is launching bovine ART media on the same standard as our serial equine line: sterile production in Russia, protocols and lot passports. SKUs and pack sizes are aligned to your protocol — we do not claim a one-line swap for every imported catalogue item.',
          'Next step: describe your protocol (OPU / IVF / vitrification) on the cattle page or contact form — we will reply with a starter set and document list.',
        ],
      },
    },
  },
  {
    slug: 'russian-alternative-eq-vitrification-kits',
    date: '2026-02-20',
    primaryCta: 'products',
    locales: {
      ru: {
        title: 'Российская альтернатива импортным наборам для витрификации лошадей',
        excerpt:
          'Если лаборатория ищет замену импортным equine-наборам для витрификации и девитрификации — что реально сравнивать: этапы протокола, документы, сроки поставки по РФ.',
        metaDescription:
          'ZOOEMBRIO — российские среды ViT и WaM для витрификации и девитрификации ооцитов и эмбрионов лошадей. Альтернатива импортным EQ-наборам с локальной поставкой.',
        body: [
          'Запрос «аналог EQ-VitriCool / EQ-VitriWarm в России» обычно означает: лаборатории нужен предсказуемый набор для витрификации и оттаивания ооцитов или эмбрионов лошадей без срыва сезона из‑за импорта.',
          'Сравнивать имеет смысл не логотип, а этапы: охлаждающие среды витрификации и среды девитрификации, согласованность с отмывкой после аспирации, русскоязычный протокол, паспорт партии и сроки отгрузки внутри РФ.',
          'Линейка ZOOEMBRIO закрывает цикл после OPU у лошадей: TSM-Asp (вымывание), Wash (отмывка), ViT1/ViT2 (витрификация), WaM1/WaM2/WaM3 (девитрификация). Производство — в России; каждая партия сопровождается документами контроля.',
          'Мы не позиционируем себя как «дешёвую копию» зарубежного бренда. Ценность для племенных программ — локальный производитель, поддержка эмбриолога и отсутствие таможенной неопределённости на критичном расходнике.',
          'Чтобы подобрать фасовки под ваш протокол, оставьте заявку на странице продуктов или в контактах — пришлём спецификации и протокол применения.',
        ],
      },
      en: {
        title: 'A Russian alternative to imported equine vitrification kits',
        excerpt:
          'What labs should compare when replacing imported equine cool/warm kits: protocol stages, lot docs and domestic lead times.',
        metaDescription:
          'ZOOEMBRIO ViT and WaM media for equine oocyte and embryo vitrification/warming in Russia — a local-supply alternative to imported EQ kits.',
        body: [
          'The question “EQ-VitriCool / EQ-VitriWarm alternative in Russia” usually means: a lab needs a predictable equine vitrification and warming set without import delays in season.',
          'Compare stages, not logos: cooling media, warming media, fit with post-aspiration wash, a clear protocol, lot documentation and shipping inside Russia.',
          'ZOOEMBRIO covers the post-OPU equine cycle: TSM-Asp (aspiration wash), Wash, ViT1/ViT2 (vitrification), WaM1/WaM2/WaM3 (warming). Manufactured in Russia; each lot ships with QC documents.',
          'We do not market ourselves as a “cheap clone” of a foreign brand. For breeding programmes the value is a domestic manufacturer, embryologist support and no customs uncertainty on a critical consumable.',
          'To match pack sizes to your protocol, request details on the products page or via contact — we will send specifications and the application protocol.',
        ],
      },
    },
  },
  {
    slug: 'equine-vs-human-ivf-media',
    date: '2026-04-10',
    primaryCta: 'technology',
    locales: {
      ru: {
        title: 'Чем среды АРТ для лошадей отличаются от сред human IVF',
        excerpt:
          'Краткий разбор для эмбриологов и ветврачей: почему «человеческие» культуральные среды нельзя автоматически переносить в протокол OPU кобыл.',
        metaDescription:
          'Среды АРТ для лошадей ≠ human IVF: видовые протоколы OPU, витрификация, фасовки. Пояснения производителя ZOOEMBRIO.',
        body: [
          'Среды культуральные для ЭКО человека (human IVF) и среды для вспомогательных репродуктивных технологий у лошадей решают разные задачи. Переносить human-наборы в equine OPU / ICSI / витрификацию «по аналогии» нельзя без валидации под вид.',
          'У лошадей другие требования к буферизации, работе в полевых и лабораторных условиях, логике витрификации ооцитов и эмбрионов и к связке этапов после трансвагинальной аспирации (OPU). Протоколы и фасовки (например, мешки TSM-Asp для вымывания) заточены под практику коневодства, а не под клинику ЭКО человека.',
          'ZOOEMBRIO разрабатывает и выпускает среды именно под equine in vivo / OPU-цикл: вымывание, отмывка, витрификация, девитрификация. Это не линия human IVF и не «универсальная» среда для всех видов.',
          'Если лаборатория работает и с лошадьми, и с КРС — важно разделять видовые линейки и документы партий. По КРС у ZOOEMBRIO отдельный запуск на том же производственном стандарте.',
          'Подробная схема этапов для лошадей — на странице «Технология»; вопросы по совместимости с вашим протоколом — через форму контакта.',
        ],
      },
      en: {
        title: 'How equine ART media differ from human IVF media',
        excerpt:
          'A short note for embryologists: why human culture media are not a drop-in for mare OPU protocols.',
        metaDescription:
          'Equine ART media ≠ human IVF media: species-specific OPU and vitrification protocols. Explained by manufacturer ZOOEMBRIO.',
        body: [
          'Human IVF culture media and equine assisted reproductive technology media solve different problems. Human kits cannot be moved into equine OPU / ICSI / vitrification “by analogy” without species validation.',
          'Horses require different buffering, field/lab handling, oocyte and embryo vitrification logic and a coherent post-OPU stage chain. Pack formats (e.g. TSM-Asp infusion bags for aspiration wash) follow equine practice, not a human IVF clinic workflow.',
          'ZOOEMBRIO develops and manufactures media specifically for the equine in vivo / OPU cycle: aspiration wash, wash, vitrification and warming. This is not a human IVF line and not a “universal” media for all species.',
          'If a lab works with both horses and cattle, keep species lines and lot documents separate. ZOOEMBRIO’s bovine direction is a separate launch on the same manufacturing standard.',
          'The equine stage map is on the Technology page; protocol-fit questions go via the contact form.',
        ],
      },
    },
  },
  {
    slug: 'equine-opu-protocol-wash-vit-wam',
    date: '2025-11-05',
    primaryCta: 'technology',
    locales: {
      ru: {
        title: 'Протокол после OPU у лошадей: вымывание, Wash, ViT и WaM',
        excerpt:
          'Как связаны четыре этапа цикла ZOOEMBRIO после аспирации ооцитов кобыл — от TSM-Asp до девитрификации.',
        metaDescription:
          'Протокол витрификации ооцитов лошадей: TSM-Asp, Wash, ViT1/ViT2, WaM1–WaM3. Схема этапов от российского производителя ZOOEMBRIO.',
        body: [
          'Успех программы OPU у лошадей начинается сразу после аспирации: ооциты чувствительны к составу среды, температуре и времени обработки. ZOOEMBRIO выстраивает полный цикл из четырёх согласованных этапов.',
          'Этап 1 — вымывание в TSM-Asp: отделение ооцитов от фолликулярной жидкости. Этап 2 — отмывка Wash между шагами протокола и перед криоконсервацией. Этап 3 — витрификация комплектом ViT1/ViT2. Этап 4 — девитрификация WaM1/WaM2/WaM3.',
          'Согласованность сред важнее «сборной» из разных брендов на соседних шагах: меньше переменных для эмбриолога и проще расследовать отклонения партии.',
          'Подробное описание каждого этапа, фасовок и логики применения — на странице «Технология». Серийные продукты перечислены в каталоге.',
          'Нужен разбор под ваш лабораторный регламент — напишите в контакты: пришлём протокол и документы на интересующие партии.',
        ],
      },
      en: {
        title: 'Post-OPU equine protocol: aspiration wash, Wash, ViT and WaM',
        excerpt:
          'How ZOOEMBRIO’s four stages connect after mare oocyte aspiration — from TSM-Asp to warming.',
        metaDescription:
          'Equine oocyte vitrification protocol stages: TSM-Asp, Wash, ViT1/ViT2, WaM1–WaM3 from Russian manufacturer ZOOEMBRIO.',
        body: [
          'Equine OPU success starts right after aspiration: oocytes are sensitive to media composition, temperature and handling time. ZOOEMBRIO structures a full cycle of four matched stages.',
          'Stage 1 — aspiration wash in TSM-Asp. Stage 2 — Wash between steps and before cryopreservation. Stage 3 — vitrification with ViT1/ViT2. Stage 4 — warming with WaM1/WaM2/WaM3.',
          'Matched media matter more than mixing brands across adjacent steps: fewer variables for the embryologist and clearer lot troubleshooting.',
          'Stage detail and pack formats are on the Technology page; serial products are listed in the catalogue.',
          'Need a fit check against your lab SOP — contact us for the protocol and lot documents.',
        ],
      },
    },
  },
  {
    slug: 'sterile-production-iso-mea-lot-control',
    date: '2025-09-18',
    primaryCta: 'about',
    locales: {
      ru: {
        title: 'Стерильное производство сред АРТ: ISO, MEA и контроль каждой партии',
        excerpt:
          'Как ZOOEMBRIO контролирует выпуск сред для лошадей: стерильные условия, испытания рецептур, MEA и эндотоксины, выходной контроль перед отгрузкой.',
        metaDescription:
          'Производство сред АРТ ZOOEMBRIO в России: сертификация ISO, MEA-тесты, контроль эндотоксинов, паспорт партии. О производстве на zooembrio.ru/about.',
        body: [
          'Для лабораторий АРТ критичны не только состав среды, но и воспроизводимость партии. ZOOEMBRIO выпускает среды в стерильных условиях на собственной площадке в России; система менеджмента качества ориентирована на стандарты ISO.',
          'Рецептуры линейки (TSM-Asp, Wash, ViT, WaM) проходят лабораторные и прикладные испытания до серийного выпуска, включая MEA-тесты на эмбриотоксичность и контроль бактериальных эндотоксинов.',
          'Каждая готовая партия проходит выходной контроль и сопровождается документами для лаборатории. Регулярные MEA сохраняются и в текущем производстве — не только на этапе запуска формулы.',
          'Такой контур нужен племенным программам, которым важна прослеживаемость и возможность разобрать отклонение на уровне партии, а не «средней по каталогу».',
          'Подробнее о производстве и контроле качества — на странице «О производстве». Запрос документов по конкретной партии — через контакты.',
        ],
      },
      en: {
        title: 'Sterile ART media manufacturing: ISO, MEA and lot release',
        excerpt:
          'How ZOOEMBRIO controls equine media lots: sterile production, formula validation, MEA and endotoxins, release checks before shipping.',
        metaDescription:
          'ZOOEMBRIO ART media manufacturing in Russia: ISO-oriented QMS, MEA tests, endotoxin control, lot certificates. See zooembrio.ru/en/about.',
        body: [
          'For ART labs, reproducibility matters as much as formula. ZOOEMBRIO manufactures media under sterile conditions at its own site in Russia; the quality system is aligned with ISO standards.',
          'Line formulas (TSM-Asp, Wash, ViT, WaM) undergo lab and applied validation before serial release, including MEA embryotoxicity testing and bacterial endotoxin control.',
          'Each finished lot passes release checks and ships with laboratory documentation. Regular MEA continues in ongoing production — not only at formula launch.',
          'Breeding programmes need this traceability to investigate deviations at lot level rather than “catalogue average”.',
          'More on manufacturing and QC is on the About page. Lot-specific documents — via contact.',
        ],
      },
    },
  },
  {
    slug: 'full-cycle-equine-art-media-line',
    date: '2025-06-12',
    primaryCta: 'products',
    locales: {
      ru: {
        title: 'Полный цикл сред АРТ для лошадей: TSM-Asp, Wash, ViT и WaM',
        excerpt:
          'Серийная линейка ZOOEMBRIO закрывает путь от вымывания ооцитов после OPU до витрификации и девитрификации — одним российским производителем.',
        metaDescription:
          'Купить среды для OPU и витрификации лошадей в России: TSM-Asp, Wash, ViT1/ViT2, WaM1–WaM3 от производителя ZOOEMBRIO.',
        body: [
          'ZOOEMBRIO — российский производитель сред АРТ для in vivo / OPU-протоколов у лошадей. Серийная линейка закрывает полный цикл после аспирации: вымывание, отмывка, витрификация и девитрификация.',
          'TSM-Asp — среда для вымывания ооцитов (фасовки в том числе в мешках для инфузий). Wash — отмывка между этапами. ViT1/ViT2 — комплект для витрификации ооцитов и эмбрионов. WaM1/WaM2/WaM3 — комплект для девитрификации.',
          'Составы и фасовки подобраны под полевые и лабораторные условия работы с лошадьми. Каждая партия проходит контроль перед отгрузкой; к продуктам прилагаются протоколы применения.',
          'Линейка ориентирована на племенные заводы, репродуктивные центры и лаборатории АРТ, которым нужна стабильная поставка внутри РФ без зависимости от импортного окна.',
          'Актуальные группы продуктов и формы заказа — в каталоге. Вопросы по подбору под ваш протокол — в контактах.',
        ],
      },
      en: {
        title: 'Full-cycle equine ART media: TSM-Asp, Wash, ViT and WaM',
        excerpt:
          'ZOOEMBRIO’s serial line covers post-OPU wash through vitrification and warming — from one Russian manufacturer.',
        metaDescription:
          'Equine OPU and vitrification media in Russia: TSM-Asp, Wash, ViT1/ViT2, WaM1–WaM3 from manufacturer ZOOEMBRIO.',
        body: [
          'ZOOEMBRIO is a Russian manufacturer of ART media for equine in vivo / OPU workflows. The serial line covers the full post-aspiration cycle: wash, wash media, vitrification and warming.',
          'TSM-Asp — aspiration wash (including infusion-bag formats). Wash — between-stage washing. ViT1/ViT2 — vitrification kit. WaM1/WaM2/WaM3 — warming kit.',
          'Formulas and pack sizes match field and lab equine practice. Each lot is checked before shipping; application protocols are provided.',
          'The line serves stud farms, reproductive centres and ART labs that need stable supply inside Russia without import windows.',
          'Product groups and order forms are in the catalogue; protocol-fit questions go via contact.',
        ],
      },
    },
  },
];

export function getNewsSorted(): NewsArticle[] {
  return [...newsArticles].sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}

export function formatNewsDate(iso: string, locale: NewsLocale): string {
  const d = new Date(iso + 'T12:00:00');
  return new Intl.DateTimeFormat(locale === 'ru' ? 'ru-RU' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

export function newsPath(slug: string, locale: NewsLocale): string {
  return locale === 'en' ? `/en/news/${slug}/` : `/news/${slug}/`;
}
