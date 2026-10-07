import type { Locale } from '../i18n';

export type NavItem = {
  href: string;
  label: string;
};

export type ProductGroup = {
  id: string;
  name: string;
  color: string;
  packaging: string;
  description: string;
  volumes: string[];
  step?: number;
};

export type TechnologyStep = {
  title: string;
  text: string;
  product: string;
  whatIs: string;
  howTitle: string;
  howSteps: string[];
  mediumNote: string;
  image: string;
  imageAlt: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  trust: {
    title: string;
    items: { title: string; text: string }[];
  };
  technology: {
    title: string;
    subtitle: string;
    cycleImage: string;
    cycleImageAlt: string;
    advantages: {
      title: string;
      subtitle: string;
      intro: string;
      forBreeders: string;
      items: { title: string; text: string }[];
      bridge: string;
      homeBridge: string;
    };
    solutionsIntro: string;
    stageLabel: string;
    whatIsLabel: string;
    steps: TechnologyStep[];
    note: string;
  };
  products: {
    title: string;
    subtitle: string;
    groups: ProductGroup[];
  };
  production: {
    title: string;
    subtitle: string;
    sterile: {
      title: string;
      text: string;
      imageAlt: string;
      image?: string;
      isoLabel: string;
      isoText: string;
      isoBadgeAlt: string;
      isoBadgeImage?: string;
    };
    formulation: {
      title: string;
      text: string;
      items: { title: string; text: string }[];
    };
    quality: {
      title: string;
      subtitle: string;
      items: { title: string; text: string }[];
    };
    items: { title: string; text: string }[];
  };
  species: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      text: string;
      href: string;
      badge: string;
      cta: string;
    }[];
  };
  partners: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      text: string;
      imageAlt: string;
      image?: string;
      metric?: string;
    }[];
  };
  reviews: {
    title: string;
    subtitle: string;
    items: { quote: string; author: string; role: string; context?: string }[];
  };
  homeProduction: {
    title: string;
    text: string;
    imageAlt: string;
    image?: string;
    cta: string;
    highlights: { title: string; text: string }[];
  };
  future: {
    title: string;
    items: { title: string; text: string; badge: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    labels: {
      phone: string;
      email: string;
      location: string;
    };
    location: {
      name: string;
      address: string;
    };
    form: {
      name: string;
      company: string;
      email: string;
      message: string;
      submit: string;
      note: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

const content: Record<Locale, SiteContent> = {
  ru: {
    meta: {
      title: 'ZOOEMBRIO — среды АРТ для лошадей и КРС | российский производитель',
      description:
        'Российский производитель сред АРТ для лошадей и крупного рогатого скота: вымывание, отмывка, витрификация и девитрификация. Локальные поставки, протоколы, документы партий.',
    },
    nav: [
      { href: '/', label: 'Главная' },
      { href: '/technology', label: 'Технология' },
      { href: '/products', label: 'Продукция' },
      { href: '/cattle', label: 'КРС' },
      { href: '/news', label: 'Новости' },
      { href: '/about', label: 'О производстве' },
      { href: '/contact', label: 'Контакты' },
    ],
    hero: {
      eyebrow: 'ZOOEMBRIO · среды АРТ · лошади и КРС',
      title: 'Среды АРТ для лошадей и крупного рогатого скота',
      subtitle:
        'Российский производитель: полный цикл сред — вымывание, отмывка, витрификация и девитрификация. Локальные поставки, рабочие протоколы и документы на каждую партию.',
      ctaPrimary: 'Запросить прайс',
      ctaSecondary: 'Смотреть технологию',
      stats: [
        { value: '2', label: 'направления: лошади и КРС' },
        { value: 'RF', label: 'производство и поставки в РФ' },
      ],
    },
    trust: {
      title: 'Почему лаборатории выбирают ZOOEMBRIO',
      items: [
        {
          title: 'Лошади и КРС',
          text: 'Equine-линейка в серийном выпуске; направление для крупного рогатого скота — в запуске на том же стандарте качества.',
        },
        {
          title: 'Локальные поставки',
          text: 'Собственное производство в России: предсказуемые сроки, без таможенной неопределённости импортных наборов.',
        },
        {
          title: 'Протокол и документы',
          text: 'Русскоязычный протокол применения, паспорта партий, контроль MEA и эндотоксинов, стерильный выпуск по ISO.',
        },
      ],
    },
    technology: {
      title: 'Технология in vivo оплодотворения лошадей',
      subtitle:
        'Протокол ZOOEMBRIO выстроен вокруг четырёх последовательных этапов. Каждая среда решает конкретную задачу и используется в строго определённой точке процесса.',
      cycleImage: '/images/technology/technology-cycle.jpg',
      cycleImageAlt:
        'Схема полного цикла in vivo протокола: вымывание в TSM-Asp, отмывка Wash, витрификация ViT1/ViT2 и девитрификация WaM1/WaM2/WaM3',
      advantages: {
        title: 'Преимущества технологии получения и вымывания ооцитов',
        subtitle:
          'Трансвагинальная аспирация ооцитов (OPU) с последующим вымыванием — основа in vivo протокола для лошадей',
        intro:
          'Племенное производство лошадей всё чаще опирается на технологии, которые позволяют сохранить и передать генетику ценных кобыл без классической схемы «оплодотворение — вынашивание — флашинг эмбриона». In vivo протокол с трансвагинальной аспирацией ооцитов (OPU) даёт доступ к половым клеткам напрямую из яичника живой матки — без необходимости, чтобы кобыла была оплодотворена и вынашивала эмбрион.',
        forBreeders:
          'Для племенных заводов, репродуктивных центров и владельцев спортивных кобыл это открывает практические возможности: получать ооциты от выдающихся донорш в удобное окно сезона, не прерывая спортивную карьеру и не перегружая матку повторными беременностями. Клетки можно витрифицировать и хранить в жидком азоте, а оплодотворение и перенос планировать по графику реципиентных кобыл и лаборатории. Критически важно, что успех всей программы начинается уже на первом лабораторном шаге — качественном вымывании ооцитов в специализированной среде. Линейка ZOOEMBRIO закрывает полный цикл после аспирации: от вымывания и отмывки до витрификации и девитрификации.',
        items: [
          {
            title: 'Генетика ценных кобыл без беременности',
            text: 'Ооциты получают от чемпионок и племенных лидеров, не нагружая их вынашиванием. Донорша может продолжать выступать, участвовать в селекционных показах или использоваться ограниченно — при этом её генетический материал остаётся доступным для программы воспроизводства.',
          },
          {
            title: 'Подходит спортивным кобылм',
            text: 'Аспирацию планируют между стартами или вне соревновательного сезона. Процедура занимает 30–40 минут под седацией; после неё кобыла возвращается к тренировкам. Для производителей спортивного поголовья это способ совместить карьеру лошади и племенную работу.',
          },
          {
            title: 'Решение для проблемных маток',
            text: 'Если классическое воспроизводство не даёт результата — хронический эндометрит, возрастные изменения, травмы половых путей, низкая оплодотворяемость — прямое получение ооцитов из яичника открывает путь к продолжению линии без отказа от ценной генетики.',
          },
          {
            title: 'Гибкое планирование в течение года',
            text: 'Аспирацию проводят при наличии фолликулов подходящего размера, не привязываясь жёстко к одному дню овуляции. Повторные процедуры возможны с интервалом 2–3 недели. Племенной завод может распределять нагрузку на лабораторию и реципиентов в течение всего сезона.',
          },
          {
            title: 'Криоконсервация и логистика',
            text: 'Ооциты и эмбрионы витрифицируют и хранят в жидком азоте, перенося в удобное время — в том числе в другой регион или на следующий сезон. Это снимает необходимость жёсткой синхронизации донорской и реципиентной кобыл и упрощает логистику для крупных племенных программ.',
          },
          {
            title: 'Качество вымывания определяет исход',
            text: 'После аспирации ооциты максимально чувствительны к составу среды, температуре и времени обработки. Правильное вымывание в TSM-Asp сохраняет морфологию клеток и задаёт успех всего последующего протокола — отмывки, витрификации и девитрификации. Именно поэтому среды для каждого этапа должны быть согласованы между собой.',
          },
        ],
        bridge:
          'Именно поэтому каждый этап после аспирации требует специализированной среды. Ниже — подробное описание каждого этапа протокола ZOOEMBRIO.',
        homeBridge:
          'На схеме — четыре этапа протокола и среды ZOOEMBRIO для каждого шага. Подробное описание каждого этапа — на странице «Технология».',
      },
      solutionsIntro:
        'Линейка сред ZOOEMBRIO покрывает полный цикл: вымывание, отмывка, витрификация и девитрификация. Для каждого этапа — подробное описание процесса и рекомендуемая среда.',
      stageLabel: 'Этап',
      whatIsLabel: 'Что это',
      steps: [
        {
          title: 'Вымывание ооцитов',
          text: 'На первом этапе выполняется вымывание ооцитов из фолликулярной жидкости. Используется среда TSM-Asp в объёмах 1000 или 3000 мл, поставляемая в мешках для инфузий.',
          product: 'TSM-Asp',
          whatIs:
            'Ооцит — женская половая клетка, которая созревает во фолликуле яичника кобылы. При in vivo протоколе ооциты получают трансвагинальной аспирацией: через стенку прямой кишки вводят ультразвуковой датчик и аспирационную иглу, фолликулы пунктируют и собирают фолликулярную жидкость с клетками. Вымывание — это отделение ооцитов от этой жидкости и клеточного «мусора» в специальной среде, чтобы клетки остались жизнеспособными.',
          howTitle: 'Как выполняется этап',
          howSteps: [
            'Кобылу готовят к процедуре: седируют, фиксируют, проводят гигиеническую обработку.',
            'Под ультразвуковым контролем пунктируют фолликулы яичника и аспирируют содержимое в пробирку с небольшим объёмом среды.',
            'Фолликулярную жидкость переносят в сосуд с мягкой средой TSM-Asp — она поддерживает ооциты во время поиска и отбора.',
            'Под микроскопом находят ооциты, переносят в свежую порцию TSM-Asp и промывают от остатков фолликулярной жидкости.',
            'Отобранные ооциты культивируют или сразу передают на следующий этап — отмывку.',
          ],
          mediumNote:
            'TSM-Asp поставляется в мешках для инфузий 1000 и 3000 мл — объём удобен для вымывания большого количества фолликулярной жидкости без частых переливаний.',
          image: '/images/technology/step-1-aspiration.svg',
          imageAlt: 'Схема аспирации ооцитов из яичника кобылы и вымывания в среде TSM-Asp',
        },
        {
          title: 'Отмывка ооцитов',
          text: 'После вымывания клетки проходят отмывку для удаления остаточных компонентов и подготовки к криоконсервации. Применяется среда Wash в фасовках 50 и 100 мл.',
          product: 'Wash',
          whatIs:
            'После вымывания на поверхности ооцитов остаются следы фолликулярной жидкости, клеток гранулёзной оболочки и других компонентов. Отмывка — это серия кратковременных переносов клетки через свежие порции среды, чтобы удалить эти остатки и подготовить ооцит к витрификации или дальнейшему культивированию.',
          howTitle: 'Как выполняется этап',
          howSteps: [
            'Ооциты переносят из среды TSM-Asp в каплю среды Wash на предварительно прогретой пластине.',
            'Клетку «промывают» — переносят в следующую каплю Wash, не допуская пересыхания капель.',
            'Обычно выполняют 3–5 переносов, пока ооцит не будет очищен от видимых прилипших элементов.',
            'После отмывки оценивают качество ооцитов (стадия созревания, морфология) и отбирают кандидатов на заморозку.',
            'Подготовленные ооциты передают на этап витрификации.',
          ],
          mediumNote:
            'Wash выпускается во флаконах 50 и 100 мл — удобный формат для лабораторной работы с пипеткой и каплями на нагревательной пластине.',
          image: '/images/technology/step-2-wash.svg',
          imageAlt: 'Схема отмывки ооцитов в каплях среды Wash',
        },
        {
          title: 'Заморозка (витрификация)',
          text: 'Для витрификации эмбрионов и ооцитов используется двухкомпонентный набор ViT1 и ViT2, обеспечивающий контролируемое замедление и фиксацию клеток.',
          product: 'ViT1 / ViT2',
          whatIs:
            'Витрификация — сверхбыстрая заморозка, при которой клетка переходит в стеклообразное состояние без образования льда. Это позволяет сохранить ооциты и эмбрионы лошадей для длительного хранения в жидком азоте (−196 °C) с высокой выживаемостью после девитрификации.',
          howTitle: 'Как выполняется этап',
          howSteps: [
            'Ооциты эквилибрируют в среде ViT1 — она подготавливает клетку к воздействию криопротекторов.',
            'Клетку переносят в концентрированную среду ViT2 на короткое время (секунды).',
            'Ооцит быстро погружают на криотоп или в криосоломинку и немедленно опускают в жидкий азот.',
            'Замороженные криотопы помещают в криохранилище для длительного хранения.',
            'Каждая партия ViT1/ViT2 готовится и применяется по протоколу с контролем температуры и времени экспозиции.',
          ],
          mediumNote:
            'Набор ViT1 + ViT2 — двухступенчатая система: первая среда для эквилибрации, вторая — для финальной витрификации.',
          image: '/images/products/vit.jpg',
          imageAlt: 'Набор сред ViT1 и ViT2 для витрификации эмбрионов и ооцитов',
        },
        {
          title: 'Девитрификация',
          text: 'При подготовке к переносу или дальнейшей работе применяется набор WaM1, WaM2 и WaM3 для поэтапного выведения клеток из витрифицированного состояния.',
          product: 'WaM1 / WaM2 / WaM3',
          whatIs:
            'Девитрификация — обратный процесс витрификации. Замороженный ооцит извлекают из жидкого азота, быстро нагревают и поэтапно выводят из криопротекторов в рабочую среду. Цель — восстановить жизнеспособность клетки для культивирования, оплодотворения или переноса.',
          howTitle: 'Как выполняется этап',
          howSteps: [
            'Криотоп извлекают из жидкого азота и сразу погружают в водяную баню 37 °C на несколько секунд.',
            'Ооцит переносят в среду WaM1 — она начинает удаление криопротекторов.',
            'Последовательно переносят через порции WaM1, WaM2 и WaM3 с соблюдением времени экспозиции.',
            'После девитрификации оценивают морфологию ооцита и его пригодность для дальнейшего использования.',
            'Восстановленные ооциты используют в программе оплодотворения или культивирования.',
          ],
          mediumNote:
            'Комплект WaM1 + WaM2 + WaM3 обеспечивает плавный переход клетки из витрифицированного состояния в рабочую среду без осмотического шока.',
          image: '/images/products/wam.jpg',
          imageAlt: 'Набор сред WaM1 и WaM2 для девитрификации эмбрионов и ооцитов',
        },
      ],
      note:
        'Все манипуляции выполняются с соблюдением температурного режима и стандартных лабораторных практик. Перед применением среды проходят необходимую эквилибрацию.',
    },
    products: {
      title: 'Линейка сред ZOOEMBRIO',
      subtitle: 'Четыре группы продуктов закрывают полный цикл in vivo протокола для лошадей. Составы адаптированы под полевые и лабораторные условия работы с АРТ.',
      groups: [
        {
          id: 'tsm-asp',
          name: 'TSM-Asp',
          color: 'teal',
          packaging: 'Мешки для инфузий',
          description: 'Среда для вымывания ооцитов на этапе аспирации и первичной обработки фолликулярной жидкости.',
          volumes: ['1000 мл', '3000 мл'],
          step: 1,
        },
        {
          id: 'wash',
          name: 'Wash',
          color: 'orange',
          packaging: 'Флаконы',
          description: 'Среда для отмывки клеток между этапами протокола и подготовки к криоконсервации.',
          volumes: ['50 мл', '100 мл'],
          step: 2,
        },
        {
          id: 'vit',
          name: 'ViT1 / ViT2',
          color: 'green',
          packaging: 'Набор из двух компонентов',
          description: 'Комплект сред для витрификации эмбрионов и ооцитов лошадей.',
          volumes: ['Набор ViT1 + ViT2'],
          step: 3,
        },
        {
          id: 'wam',
          name: 'WaM1 / WaM2 / WaM3',
          color: 'magenta',
          packaging: 'Набор из трёх компонентов',
          description: 'Комплект сред для девитрификации витрифицированных эмбрионов и ооцитов.',
          volumes: ['Набор WaM1 + WaM2 + WaM3'],
          step: 4,
        },
      ],
    },
    production: {
      title: 'О производстве',
      subtitle:
        'ZOOEMBRIO — российский производитель сред для вспомогательных репродуктивных технологий. Собственная рецептура, стерильное производство и многоуровневый контроль качества.',
      sterile: {
        title: 'Стерильное производство',
        text: 'Среды ZOOEMBRIO выпускаются в контролируемых стерильных условиях. Производственные помещения и технологические процессы организованы с соблюдением высочайших стандартов чистоты, прослеживаемости и воспроизводимости — от приёмки сырья до выпуска готовой партии.',
        image: '/images/production/facility.jpg',
        imageAlt: 'Фото производственной лаборатории',
        isoLabel: 'Сертификация ISO',
        isoText:
          'Производство сертифицировано по стандартам ISO. Система менеджмента качества охватывает разработку рецептур, производство, контроль готовой продукции и отгрузку.',
        isoBadgeAlt: 'Сертификат ISO',
        isoBadgeImage: '/images/production/iso-badge.svg',
      },
      formulation: {
        title: 'Собственная рецептура и валидация',
        text: 'В лаборатории ZOOEMBRIO мы с нуля разработали и довели до производства все составы линейки — TSM-Asp, Wash, ViT1/ViT2 и WaM1/WaM2/WaM3. Каждая рецептура создана под свой этап протокола in vivo оплодотворения лошадей и прошла полный цикл валидации: лабораторные и прикладные испытания, MEA-тесты на эмбриотоксичность и контроль бактериальных эндотоксинов. В серийный выпуск среды перешли только после подтверждения безопасности и эффективности.',
        items: [
          {
            title: 'Разработка рецептур',
            text: 'Составы TSM-Asp, Wash, ViT1/ViT2 и WaM1/WaM2/WaM3 разработаны и оптимизированы в лаборатории ZOOEMBRIO с учётом специфики работы с ооцитами и эмбрионами лошадей.',
          },
          {
            title: 'Успешное тестирование',
            text: 'Перед запуском серийного производства каждая рецептура прошла полный цикл лабораторных и прикладных испытаний в реальных условиях протокола.',
          },
          {
            title: 'MEA-тесты',
            text: 'Среды прошли тесты на эмбриотоксичность (Mouse Embryo Assay) — подтверждено, что составы не оказывают негативного влияния на развитие эмбрионов.',
          },
          {
            title: 'Тесты на эндотоксины',
            text: 'Проведены испытания на содержание бактериальных эндотоксинов. Уровень эндотоксинов соответствует требованиям к средам для вспомогательных репродуктивных технологий.',
          },
        ],
      },
      quality: {
        title: 'Контроль качества',
        subtitle:
          'Многоуровневая система проверок на каждом этапе — от сырья до отгрузки готовой партии',
        items: [
          {
            title: 'Входной контроль сырья',
            text: 'Каждая партия сырья проверяется по сертификатам и спецификациям поставщика перед допуском в производство.',
          },
          {
            title: 'Производственный контроль',
            text: 'Соблюдение технологических регламентов на этапах приготовления, розлива и маркировки в стерильных условиях.',
          },
          {
            title: 'Выходной контроль партии',
            text: 'Каждая готовая партия проходит производственный выходной контроль и не отгружается без подтверждения соответствия стандартам.',
          },
          {
            title: 'Регулярные MEA-тесты',
            text: 'Эмбриотоксичность сред контролируется на регулярной основе — не только при запуске новой рецептуры, но и в рамках текущего производства.',
          },
          {
            title: 'Тесты на эндотоксины',
            text: 'Систематический контроль уровня бактериальных эндотоксинов в готовой продукции для безопасности ооцитов и эмбрионов.',
          },
        ],
      },
      items: [
        {
          title: 'Форматы под задачу',
          text: 'TSM-Asp поставляется в мешках для инфузий 1000 и 3000 мл, остальные среды — в лабораторных фасовках, удобных для работы в лаборатории.',
        },
        {
          title: 'Развитие линейки',
          text: 'Лошади — серийная линейка. Параллельно запускаем среды АРТ для КРС и готовим расходные пластиковые материалы.',
        },
      ],
    },
    species: {
      title: 'Два вида — один производитель',
      subtitle:
        'Работаете с кобылами, с коровами или с обоими направлениями — протоколы, документы и поставки из одной точки в России.',
      items: [
        {
          title: 'Лошади',
          text: 'Серийная линейка TSM-Asp, Wash, ViT и WaM для in vivo / OPU-цикла: от вымывания до девитрификации.',
          href: '/products',
          badge: 'В производстве',
          cta: 'К продукции',
        },
        {
          title: 'Крупный рогатый скот',
          text: 'Запускаем линейку сред АРТ для КРС на том же стандарте качества. Ранний доступ и подбор под ваш протокол — по заявке.',
          href: '/cattle',
          badge: 'Запуск',
          cta: 'Узнать о КРС',
        },
      ],
    },
    partners: {
      title: 'Кейсы из практики',
      subtitle:
        'Реальные сценарии внедрения: что менялось в лаборатории или на заводе после перехода на среды ZOOEMBRIO.',
      items: [
        {
          name: 'Лаборатория при КСК, Московская область',
          role: 'OPU-дни 2 раза в неделю',
          text: 'До перехода объём TSM набирали из нескольких флаконов — на длинном OPU-дне это давало лишние вскрытия и риск по стерильности. После перехода на мешки 1000/3000 мл линия подключается один раз; Wash и ViT заказывают одним пакетом под график кобыл. За случной сезон провели больше сорока аспираций на одной связке поставщика, без «переходных» партий от импорта.',
          imageAlt: 'Лаборатория репродукции животных',
          image: '/images/partners/partner-1.jpg',
          metric: '40+ OPU за сезон',
        },
        {
          name: 'Племенной конный завод, Краснодарский край',
          role: 'Полевой график + склад сред',
          text: 'Главная боль была не в рецептуре, а в логистике: импортный набор срывал сроки на пике сезона. Сейчас Wash и TSM-Asp кладут в заявку за 10–14 дней до блока процедур; паспорта партий сразу уходят в архив ветслужбы завода. Эмбриолог отмечает, что прозрачность Wash удобна при работе на тёплом столике без «мути» между партиями.',
          imageAlt: 'Племенной конный завод',
          image: '/images/partners/partner-2.jpg',
          metric: 'Сезон без срыва поставок',
        },
        {
          name: 'Частная лаборатория АРТ, Санкт-Петербург',
          role: 'Витрификация и банк эмбрионов',
          text: 'Переписывать весь SOP под зарубежный kit не стали: ViT1/ViT2 и трёхступенчатый WaM встроили в уже отработанные тайминги. За два сезона ни одной остановки из‑за отсутствия сред; вопросы по температуре экспозиции закрыли одним созвоном с технологом ZOOEMBRIO и зафиксировали во внутреннем чек-листе.',
          imageAlt: 'Рабочее место эмбриологической лаборатории',
          image: '/images/partners/partner-3.jpg',
          metric: '2 сезона в одном SOP',
        },
      ],
    },
    reviews: {
      title: 'Голоса с рабочего стола',
      subtitle:
        'Не рекламные слоганы, а то, что говорят эмбриологи и ветврачи после смены поставщика — со своими деталями протокола.',
      items: [
        {
          quote:
            'В день, когда стоят четыре кобылы подряд, экономия на вскрытиях мешка против пяти флаконов — это не «удобство», а меньше точек, где можно ошибиться. TSM-Asp ведёт себя одинаково с марта по сентябрь; Wash не «плывёт» по вязкости между партиями. Мы наконец перестали держать страховой запас импортного kit «на всякий случай».',
          author: 'Марина С.',
          role: 'Эмбриолог',
          context: 'Лаборатория при КСК, Московская область',
        },
        {
          quote:
            'Мне как ветврачу завода нужны три вещи в накладной: срок годности, паспорт партии и дата приезда. С ZOOEMBRIO это предсказуемо. Один раз задержали фуру на сутки — предупредили заранее, сдвинули OPU-блок. С импортом такого диалога не было: либо есть на складе дистрибьютора, либо «ждите контейнер».',
          author: 'Игорь В.',
          role: 'Главный ветеринарный врач',
          context: 'Племенной завод, Краснодарский край',
        },
        {
          quote:
            'ViT2 у нас стоит на этапе, где раньше коллеги ругались на «разную тягучесть» чужих сред. Здесь капля ведёт себя знакомо от партии к партии — под стереомикроскопом это сразу видно. WaM1→3 не заставили менять посуду и таймеры; протокол ZOOEMBRIO положили рядом с нашим ламинированным чек-листом.',
          author: 'Анна К.',
          role: 'Ведущий эмбриолог',
          context: 'Лаборатория АРТ, Санкт-Петербург',
        },
        {
          quote:
            'Мы смотрим на КРС-направление именно потому, что equine уже обкатан: не хочется снова зависеть от одной зарубежной линейки на коровах. Пока берём консультацию и тестовый объём под наш OPU-регламент — важно, что документы и язык протокола те же, что по лошадям.',
          author: 'Дмитрий Л.',
          role: 'Руководитель лаборатории репродукции',
          context: 'Агрохолдинг, Центральный ФО · пилот КРС',
        },
      ],
    },
    homeProduction: {
      title: 'Наше производство',
      text: 'ZOOEMBRIO выпускает среды АРТ в стерильных условиях на собственной площадке. Производство сертифицировано по ISO — мы контролируем рецептуру, приготовление и розлив от сырья до готовой партии.',
      image: '/images/production/facility.jpg',
      imageAlt: 'Фото производства',
      cta: 'Подробнее о производстве',
      highlights: [
        {
          title: 'Стерильное производство',
          text: 'Выпуск сред в контролируемых стерильных условиях по стандартам ISO.',
        },
        {
          title: 'Собственная рецептура',
          text: 'Формулы разработаны и протестированы — пройдены MEA и тесты на эндотоксины.',
        },
        {
          title: 'Контроль качества',
          text: 'Выходной контроль каждой партии, регулярные MEA и тесты на эндотоксины.',
        },
      ],
    },
    future: {
      title: 'Развитие направлений',
      items: [
        {
          title: 'Среды для КРС',
          text: 'Запуск линейки для крупного рогатого скота: тот же стандарт производства, протоколы и документы партий. Подробности и заявка — в разделе КРС.',
          badge: 'Запуск',
        },
        {
          title: 'Пластик и расходники',
          text: 'Линейка пластиковых изделий для протоколов ВРТ — чашки, катетеры, вспомогательные материалы.',
          badge: 'Скоро',
        },
      ],
    },
    contact: {
      title: 'Связаться с нами',
      subtitle: 'Оставьте заявку — пришлём прайс по лошадям и/или КРС, протоколы и документы партий.',
      phone: '+7 (909) 169-22-14',
      email: 'info@zooembrio.ru',
      labels: {
        phone: 'Телефон',
        email: 'Email',
        location: 'Адрес',
      },
      location: {
        name: 'БЦ G10',
        address: 'г. Москва, Киевское шоссе, 21-й км, 3с1',
      },
      form: {
        name: 'Ваше имя',
        company: 'Организация',
        email: 'Email',
        message: 'Сообщение',
        submit: 'Отправить заявку',
        note: 'Нажимая кнопку, вы соглашаетесь на обработку персональных данных для ответа на запрос.',
      },
    },
    footer: {
      tagline: 'Среды АРТ для лошадей и крупного рогатого скота · производство в России',
      rights: '© ZOOEMBRIO. Все права защищены.',
    },
  },
  en: {
    meta: {
      title: 'ZOOEMBRIO — ART media for horses and cattle | made in Russia',
      description:
        'Russian manufacturer of ART media for equine and bovine labs: washing, rinsing, vitrification and warming. Local supply, protocols and lot documentation.',
    },
    nav: [
      { href: '/', label: 'Home' },
      { href: '/technology', label: 'Technology' },
      { href: '/products', label: 'Products' },
      { href: '/cattle', label: 'Cattle' },
      { href: '/news', label: 'News' },
      { href: '/about', label: 'Production' },
      { href: '/contact', label: 'Contact' },
    ],
    hero: {
      eyebrow: 'ZOOEMBRIO · ART media · equine & bovine',
      title: 'ART media for horses and cattle',
      subtitle:
        'Russian manufacturer for the full media cycle — washing, rinsing, vitrification and warming. Local supply, application protocols and documentation with every lot.',
      ctaPrimary: 'Request price list',
      ctaSecondary: 'View technology',
      stats: [
        { value: '2', label: 'species: horses & cattle' },
        { value: 'RU', label: 'made and shipped in Russia' },
      ],
    },
    trust: {
      title: 'Why labs choose ZOOEMBRIO',
      items: [
        {
          title: 'Horses and cattle',
          text: 'Equine line in serial production; cattle ART media launching under the same quality standard.',
        },
        {
          title: 'Local supply',
          text: 'In-house manufacturing in Russia — predictable lead times without import uncertainty.',
        },
        {
          title: 'Protocol and paperwork',
          text: 'Application protocols, lot certificates, MEA and endotoxin control, ISO sterile production.',
        },
      ],
    },
    technology: {
      title: 'Equine in vivo fertilization technology',
      subtitle:
        'The ZOOEMBRIO protocol is built around four sequential stages. Each medium addresses a specific task at a defined point in the process.',
      cycleImage: '/images/technology/technology-cycle.jpg',
      cycleImageAlt:
        'Diagram of the full in vivo protocol cycle: washing in TSM-Asp, rinsing in Wash, vitrification with ViT1/ViT2 and devitrification with WaM1/WaM2/WaM3',
      advantages: {
        title: 'Advantages of oocyte collection and washing technology',
        subtitle:
          'Transvaginal oocyte aspiration (OPU) followed by washing is the foundation of the equine in vivo protocol',
        intro:
          'Equine breeding increasingly relies on technologies that preserve and pass on genetics from valuable mares without the classical path of breeding, pregnancy and embryo flushing. The in vivo protocol with transvaginal oocyte aspiration (OPU) provides direct access to gametes from the ovary of a live mare — without requiring her to be bred and carry an embryo.',
        forBreeders:
          'For breeding farms, reproductive centers and owners of performance mares, this opens practical options: collect oocytes from outstanding donors in a convenient seasonal window without interrupting competition careers or overloading the uterus with repeat pregnancies. Cells can be vitrified and stored in liquid nitrogen, while fertilization and transfer are scheduled around recipient mares and laboratory capacity. Success of the entire program starts at the first laboratory step — high-quality washing in a specialized medium. The ZOOEMBRIO line covers the full post-aspiration cycle: from washing and rinsing to vitrification and devitrification.',
        items: [
          {
            title: 'Genetics from valuable mares without pregnancy',
            text: 'Oocytes are collected from champions and leading broodmares without the burden of carrying offspring. The donor can keep competing, attend selection events or remain available on a limited schedule while her genetic material stays accessible for the breeding program.',
          },
          {
            title: 'Suitable for performance mares',
            text: 'Aspiration is scheduled between events or outside the competition season. The procedure takes 30–40 minutes under sedation; the mare can return to training afterward. For sport horse producers, this is a way to combine athletic careers with breeding work.',
          },
          {
            title: 'A solution for problem mares',
            text: 'When conventional reproduction fails — chronic endometritis, age-related changes, reproductive tract injuries, low fertilization rates — direct oocyte collection from the ovary opens a path to continue the line without giving up valuable genetics.',
          },
          {
            title: 'Flexible year-round planning',
            text: 'Aspiration is performed when follicles of suitable size are present, without strict dependence on a single ovulation day. Repeat procedures are possible at 2–3 week intervals. A breeding farm can distribute laboratory and recipient workload across the full season.',
          },
          {
            title: 'Cryopreservation and logistics',
            text: 'Oocytes and embryos are vitrified and stored in liquid nitrogen for transfer at a convenient time — including another region or the next season. This removes the need for tight synchronization between donor and recipient mares and simplifies logistics for large breeding programs.',
          },
          {
            title: 'Washing quality determines the outcome',
            text: 'After aspiration, oocytes are highly sensitive to medium composition, temperature and handling time. Proper washing in TSM-Asp preserves cell morphology and sets the success of the entire subsequent protocol — rinsing, vitrification and devitrification. Media for each stage must therefore work as a coordinated system.',
          },
        ],
        bridge:
          'That is why every step after aspiration requires a specialized medium. Below is a detailed description of each stage of the ZOOEMBRIO protocol.',
        homeBridge:
          'The diagram shows the four protocol stages and ZOOEMBRIO media for each step. A detailed description of every stage is on the Technology page.',
      },
      solutionsIntro:
        'The ZOOEMBRIO product line covers the full cycle: washing, rinsing, vitrification and devitrification. For each stage — a detailed process description and the recommended medium.',
      stageLabel: 'Stage',
      whatIsLabel: 'What it is',
      steps: [
        {
          title: 'Oocyte washing',
          text: 'Oocytes are washed from follicular fluid. TSM-Asp medium is used in 1000 or 3000 ml infusion bags.',
          product: 'TSM-Asp',
          whatIs:
            'An oocyte is the female gamete that matures inside a follicle in the mare\'s ovary. In the in vivo protocol, oocytes are collected by transvaginal aspiration: an ultrasound probe and aspiration needle are introduced transrectally, follicles are punctured and follicular fluid with cells is collected. Washing is the separation of oocytes from this fluid and cellular debris in a specialized medium to keep cells viable.',
          howTitle: 'How the stage is performed',
          howSteps: [
            'The mare is prepared: sedated, restrained and cleaned for the procedure.',
            'Under ultrasound guidance, ovarian follicles are punctured and contents aspirated into a tube with a small volume of medium.',
            'Follicular fluid is transferred to a container with TSM-Asp medium — it supports oocytes during search and selection.',
            'Oocytes are located under a microscope, moved to fresh TSM-Asp and washed free of follicular fluid residues.',
            'Selected oocytes are cultured or passed directly to the next stage — rinsing.',
          ],
          mediumNote:
            'TSM-Asp is supplied in 1000 and 3000 ml infusion bags — convenient for washing large volumes of follicular fluid without frequent transfers.',
          image: '/images/technology/step-1-aspiration.svg',
          imageAlt: 'Diagram of oocyte aspiration from the mare ovary and washing in TSM-Asp medium',
        },
        {
          title: 'Oocyte rinsing',
          text: 'After washing, cells are rinsed to remove residual components and prepare for cryopreservation. Wash medium in 50 and 100 ml vials.',
          product: 'Wash',
          whatIs:
            'After washing, traces of follicular fluid, granulosa cells and other components remain on the oocyte surface. Rinsing is a series of brief transfers through fresh medium portions to remove these residues and prepare the oocyte for vitrification or further culture.',
          howTitle: 'How the stage is performed',
          howSteps: [
            'Oocytes are moved from TSM-Asp into a droplet of Wash medium on a pre-warmed plate.',
            'Cells are rinsed by transferring to the next Wash droplet without allowing droplets to dry.',
            'Typically 3–5 transfers are performed until the oocyte is clear of visible attached material.',
            'After rinsing, oocyte quality is assessed (maturation stage, morphology) and candidates for freezing are selected.',
            'Prepared oocytes are passed to the vitrification stage.',
          ],
          mediumNote:
            'Wash is available in 50 and 100 ml vials — a practical format for laboratory work with pipettes and droplets on a warming stage.',
          image: '/images/technology/step-2-wash.svg',
          imageAlt: 'Diagram of oocyte rinsing in Wash medium droplets',
        },
        {
          title: 'Freezing (vitrification)',
          text: 'The two-component ViT1 and ViT2 kit is used for vitrification of equine embryos and oocytes.',
          product: 'ViT1 / ViT2',
          whatIs:
            'Vitrification is ultra-rapid freezing in which the cell enters a glass-like state without ice crystal formation. This allows equine oocytes and embryos to be stored long-term in liquid nitrogen (−196 °C) with high survival after devitrification.',
          howTitle: 'How the stage is performed',
          howSteps: [
            'Oocytes are equilibrated in ViT1 medium — it prepares the cell for cryoprotectant exposure.',
            'The cell is transferred to concentrated ViT2 medium for a short time (seconds).',
            'The oocyte is quickly loaded onto a cryotop or into a cryostraw and immediately plunged into liquid nitrogen.',
            'Frozen cryotops are placed in a cryostorage tank for long-term storage.',
            'Each ViT1/ViT2 batch is prepared and used according to protocol with temperature and exposure time control.',
          ],
          mediumNote:
            'The ViT1 + ViT2 kit is a two-step system: first medium for equilibration, second for final vitrification.',
          image: '/images/products/vit.jpg',
          imageAlt: 'ViT1 and ViT2 media kit for embryo and oocyte vitrification',
        },
        {
          title: 'Devitrification',
          text: 'The WaM1, WaM2 and WaM3 kit is applied for stepwise recovery of vitrified cells before transfer or further handling.',
          product: 'WaM1 / WaM2 / WaM3',
          whatIs:
            'Devitrification is the reverse of vitrification. The frozen oocyte is removed from liquid nitrogen, rapidly warmed and stepwise recovered from cryoprotectants into working medium. The goal is to restore cell viability for culture, fertilization or transfer.',
          howTitle: 'How the stage is performed',
          howSteps: [
            'The cryotop is removed from liquid nitrogen and immediately immersed in a 37 °C water bath for several seconds.',
            'The oocyte is transferred to WaM1 medium — it begins cryoprotectant removal.',
            'Sequential transfers through WaM1, WaM2 and WaM3 portions with controlled exposure times.',
            'After devitrification, oocyte morphology and suitability for further use are assessed.',
            'Recovered oocytes are used in fertilization or culture programs.',
          ],
          mediumNote:
            'The WaM1 + WaM2 + WaM3 kit provides a smooth transition of the cell from vitrified state to working medium without osmotic shock.',
          image: '/images/products/wam.jpg',
          imageAlt: 'WaM1 and WaM2 media kit for embryo and oocyte devitrification',
        },
      ],
      note:
        'All manipulations must follow temperature control and standard laboratory practices. Media require appropriate equilibration before use.',
    },
    products: {
      title: 'ZOOEMBRIO product line',
      subtitle: 'Four product groups cover the complete equine in vivo protocol.',
      groups: [
        {
          id: 'tsm-asp',
          name: 'TSM-Asp',
          color: 'teal',
          packaging: 'Infusion bags',
          description: 'Medium for washing oocytes during aspiration and primary follicular fluid processing.',
          volumes: ['1000 ml', '3000 ml'],
          step: 1,
        },
        {
          id: 'wash',
          name: 'Wash',
          color: 'orange',
          packaging: 'Vials',
          description: 'Medium for rinsing cells between protocol stages and preparing for cryopreservation.',
          volumes: ['50 ml', '100 ml'],
          step: 2,
        },
        {
          id: 'vit',
          name: 'ViT1 / ViT2',
          color: 'green',
          packaging: 'Two-component kit',
          description: 'Media kit for vitrification of equine embryos and oocytes.',
          volumes: ['ViT1 + ViT2 kit'],
          step: 3,
        },
        {
          id: 'wam',
          name: 'WaM1 / WaM2 / WaM3',
          color: 'magenta',
          packaging: 'Three-component kit',
          description: 'Media kit for devitrification of vitrified embryos and oocytes.',
          volumes: ['WaM1 + WaM2 + WaM3 kit'],
          step: 4,
        },
      ],
    },
    production: {
      title: 'About production',
      subtitle:
        'ZOOEMBRIO is a Russian manufacturer of ART media. Proprietary formulations, sterile production and multi-level quality control.',
      sterile: {
        title: 'Sterile manufacturing',
        text: 'ZOOEMBRIO media are produced under controlled sterile conditions. Facilities and processes are organized to the highest standards of cleanliness, traceability and reproducibility — from raw material intake to finished batch release.',
        image: '/images/production/facility.jpg',
        imageAlt: 'Production laboratory photo',
        isoLabel: 'ISO certification',
        isoText:
          'Manufacturing is certified to ISO standards. The quality management system covers formulation development, production, finished product control and shipment.',
        isoBadgeAlt: 'ISO certificate',
        isoBadgeImage: '/images/production/iso-badge.svg',
      },
      formulation: {
        title: 'Proprietary formulations and validation',
        text: 'At the ZOOEMBRIO laboratory we developed every formulation in our line from scratch — TSM-Asp, Wash, ViT1/ViT2 and WaM1/WaM2/WaM3. Each recipe targets a specific stage of the equine in vivo fertilization protocol and completed full validation: laboratory and applied testing, MEA embryo toxicity assays and bacterial endotoxin control. Media entered serial production only after safety and performance were confirmed.',
        items: [
          {
            title: 'Formulation development',
            text: 'TSM-Asp, Wash, ViT1/ViT2 and WaM1/WaM2/WaM3 compositions are developed and optimized in the ZOOEMBRIO laboratory for equine oocyte and embryo work.',
          },
          {
            title: 'Successful testing',
            text: 'Before serial production launch, each formulation underwent a full cycle of laboratory and applied testing under real protocol conditions.',
          },
          {
            title: 'MEA testing',
            text: 'Media passed embryo toxicity testing (Mouse Embryo Assay) — confirming that formulations do not adversely affect embryo development.',
          },
          {
            title: 'Endotoxin testing',
            text: 'Bacterial endotoxin testing has been completed. Endotoxin levels meet requirements for assisted reproductive technology media.',
          },
        ],
      },
      quality: {
        title: 'Quality control',
        subtitle:
          'A multi-level verification system at every stage — from raw materials to shipment',
        items: [
          {
            title: 'Incoming raw material control',
            text: 'Every raw material batch is verified against supplier certificates and specifications before release to production.',
          },
          {
            title: 'In-process control',
            text: 'Compliance with process specifications during preparation, filling and labeling under sterile conditions.',
          },
          {
            title: 'Finished batch release',
            text: 'Every finished batch undergoes production release testing and is not shipped without confirmed compliance.',
          },
          {
            title: 'Regular MEA testing',
            text: 'Embryo toxicity is monitored on a regular basis — not only when launching a new formulation, but throughout ongoing production.',
          },
          {
            title: 'Endotoxin testing',
            text: 'Systematic monitoring of bacterial endotoxin levels in finished product for oocyte and embryo safety.',
          },
        ],
      },
      items: [
        {
          title: 'Purpose-built formats',
          text: 'TSM-Asp is supplied in 1000 and 3000 ml infusion bags; other media in laboratory vials suited for laboratory work.',
        },
        {
          title: 'Product expansion',
          text: 'Equine remains in serial production. In parallel we are launching cattle ART media and preparing plastic consumables.',
        },
      ],
    },
    species: {
      title: 'Two species — one manufacturer',
      subtitle:
        'Whether you work with mares, cows, or both — protocols, paperwork and supply from one Russian source.',
      items: [
        {
          title: 'Horses',
          text: 'Serial TSM-Asp, Wash, ViT and WaM line for the in vivo / OPU cycle — from washing to warming.',
          href: '/products',
          badge: 'In production',
          cta: 'View products',
        },
        {
          title: 'Cattle',
          text: 'Launching bovine ART media under the same quality standard. Early access and protocol fit — on request.',
          href: '/cattle',
          badge: 'Launch',
          cta: 'About cattle',
        },
      ],
    },
    partners: {
      title: 'Field cases',
      subtitle: 'What changed in the lab or on the farm after switching to ZOOEMBRIO media.',
      items: [
        {
          name: 'Lab at an equine center, Moscow Region',
          role: 'OPU days twice a week',
          text: 'Before the switch they built TSM volume from multiple vials — long OPU days meant extra openings and sterility risk. With 1000/3000 ml bags the line connects once; Wash and ViT are ordered as one pack against the mare schedule. Over the breeding season they ran forty-plus aspirations on a single supplier stack, without bridging lots from imports.',
          imageAlt: 'Animal reproductive laboratory',
          image: '/images/partners/partner-1.jpg',
          metric: '40+ OPU per season',
        },
        {
          name: 'Breeding farm, Krasnodar Region',
          role: 'Field schedule + media stock',
          text: 'The pain point was logistics more than formula: an imported kit slipped at peak season. Now Wash and TSM-Asp go into the order 10–14 days before a procedure block; lot certificates go straight into the farm vet archive. The embryologist notes Wash clarity stays consistent on the warming stage across lots.',
          imageAlt: 'Equine breeding farm',
          image: '/images/partners/partner-2.jpg',
          metric: 'Season without stockouts',
        },
        {
          name: 'Private ART lab, St. Petersburg',
          role: 'Vitrification & embryo bank',
          text: 'They did not rewrite the full SOP for a foreign kit: ViT1/ViT2 and three-step WaM slotted into existing timings. Two seasons with no downtime from missing media; temperature/exposure questions were closed in one call with a ZOOEMBRIO technologist and written into the internal checklist.',
          imageAlt: 'Embryology laboratory workstation',
          image: '/images/partners/partner-3.jpg',
          metric: '2 seasons, one SOP',
        },
      ],
    },
    reviews: {
      title: 'Voices from the bench',
      subtitle:
        'Not ad slogans — what embryologists and vets say after changing supplier, with protocol detail.',
      items: [
        {
          quote:
            'On a day with four mares back-to-back, one bag versus five vials is not “nice to have” — it is fewer points of failure. TSM-Asp behaves the same from March to September; Wash viscosity does not drift lot to lot. We finally stopped keeping an imported kit “just in case”.',
          author: 'Marina S.',
          role: 'Embryologist',
          context: 'Equine center lab, Moscow Region',
        },
        {
          quote:
            'As farm vet I need three things on the paperwork: expiry, lot certificate and arrival date. With ZOOEMBRIO that is predictable. Once a truck slipped a day — they warned us and we moved the OPU block. With imports there was no dialogue: either the distributor had stock or “wait for the container”.',
          author: 'Igor V.',
          role: 'Chief veterinarian',
          context: 'Breeding farm, Krasnodar Region',
        },
        {
          quote:
            'ViT2 sits at the step where colleagues used to complain about “different drag” from foreign media. Here the drop feels familiar lot to lot — you see it under the stereomicroscope. WaM1→3 did not force new dishes or timers; we keep the ZOOEMBRIO protocol next to our laminated checklist.',
          author: 'Anna K.',
          role: 'Lead embryologist',
          context: 'ART laboratory, St. Petersburg',
        },
        {
          quote:
            'We are looking at cattle because equine already works: we do not want another single foreign line for cows. For now we take a consult and a test volume under our OPU SOP — same document language as for horses matters.',
          author: 'Dmitry L.',
          role: 'Head of reproduction lab',
          context: 'Agri holding, Central Russia · cattle pilot',
        },
      ],
    },
    homeProduction: {
      title: 'Our production',
      text: 'ZOOEMBRIO manufactures ART media under sterile conditions at our own facility. ISO-certified production — we control formulation, preparation and filling from raw materials to finished batch.',
      image: '/images/production/facility.jpg',
      imageAlt: 'Production photo',
      cta: 'Learn more about production',
      highlights: [
        {
          title: 'Sterile manufacturing',
          text: 'Media produced under controlled sterile conditions to ISO standards.',
        },
        {
          title: 'Proprietary formulations',
          text: 'Formulas developed and tested — MEA and endotoxin testing passed.',
        },
        {
          title: 'Quality control',
          text: 'Release testing for every batch, regular MEA and endotoxin monitoring.',
        },
      ],
    },
    future: {
      title: 'Future directions',
      items: [
        {
          title: 'Cattle media',
          text: 'Launching the bovine ART line under the same manufacturing standard, protocols and lot docs. Details and requests — on the Cattle page.',
          badge: 'Launch',
        },
        {
          title: 'Plastics & consumables',
          text: 'Plasticware for ART protocols — dishes, catheters and auxiliary materials.',
          badge: 'Coming soon',
        },
      ],
    },
    contact: {
      title: 'Contact us',
      subtitle: 'Send a request — we will share equine and/or cattle pricing, protocols and lot documentation.',
      phone: '+7 (909) 169-22-14',
      email: 'info@zooembrio.ru',
      labels: {
        phone: 'Phone',
        email: 'Email',
        location: 'Address',
      },
      location: {
        name: 'BC G10',
        address: 'Moscow, Kievskoye Highway, 21 km, bldg. 3с1',
      },
      form: {
        name: 'Your name',
        company: 'Organization',
        email: 'Email',
        message: 'Message',
        submit: 'Send request',
        note: 'By submitting, you agree to the processing of personal data to respond to your inquiry.',
      },
    },
    footer: {
      tagline: 'ART media for horses and cattle · manufactured in Russia',
      rights: '© ZOOEMBRIO. All rights reserved.',
    },
  },
};

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
