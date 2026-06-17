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
    advantages: {
      title: string;
      subtitle: string;
      intro: string;
      items: { title: string; text: string }[];
      bridge: string;
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
  partners: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      text: string;
      imageAlt: string;
      image?: string;
    }[];
  };
  reviews: {
    title: string;
    subtitle: string;
    items: { quote: string; author: string; role: string }[];
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
      title: 'ZOOEMBRIO — среды АРТ для in vivo оплодотворения лошадей',
      description:
        'Производитель сред для вымывания, отмывки, заморозки и разморозки ооцитов и эмбрионов лошадей. Линейка TSM-Asp, Wash, ViT1/2, WaM1/2.',
    },
    nav: [
      { href: '/', label: 'Главная' },
      { href: '/technology', label: 'Технология' },
      { href: '/products', label: 'Продукция' },
      { href: '/about', label: 'О производстве' },
      { href: '/contact', label: 'Контакты' },
    ],
    hero: {
      eyebrow: 'ZOOEMBRIO · Assisted Reproductive Technologies',
      title: 'Среды АРТ для in vivo оплодотворения лошадей',
      subtitle:
        'Полный цикл сопровождения процесса: вымывание, отмывка, витрификация и разморозка. Собственное производство, экспертная рецептура, стабильное качество партии за партией.',
      ctaPrimary: 'Запросить прайс',
      ctaSecondary: 'Смотреть технологию',
      stats: [
        { value: '4', label: 'группы сред в линейке' },
        { value: '1000–3000', label: 'мл TSM-Asp в мешках' },
        { value: 'in vivo', label: 'протокол для лошадей' },
      ],
    },
    trust: {
      title: 'Экспертный подход к каждому этапу',
      items: [
        {
          title: 'Специализация на лошадях',
          text: 'Среды разработаны под протокол in vivo оплодотворения и сопровождают весь путь от вымывания до разморозки.',
        },
        {
          title: 'Контроль производства',
          text: 'Каждая партия проходит входной контроль сырья и выпускной контроль готовой продукции перед отгрузкой.',
        },
        {
          title: 'Практическая применимость',
          text: 'Фасовки и форматы упаковки подобраны под реальные условия работы в лаборатории.',
        },
      ],
    },
    technology: {
      title: 'Технология in vivo оплодотворения лошадей',
      subtitle:
        'Протокол ZOOEMBRIO выстроен вокруг четырёх последовательных этапов. Каждая среда решает конкретную задачу и используется в строго определённой точке процесса.',
      advantages: {
        title: 'Преимущества технологии получения и вымывания ооцитов',
        subtitle:
          'Трансвагинальная аспирация ооцитов (OPU) с последующим вымыванием — основа in vivo протокола для лошадей',
        intro:
          'В отличие от классического флашинга эмбрионов, при котором кобыла должна быть оплодотворена и вынашивать эмбрион, технология аспирации ооцитов позволяет получать половые клетки напрямую из яичника живой кобылы. Первый и критически важный лабораторный шаг после аспирации — вымывание: отделение ооцитов от фолликулярной жидкости в специализированной среде с сохранением их жизнеспособности.',
        items: [
          {
            title: 'Генетика ценных кобыл без беременности',
            text: 'Ооциты можно получить от выдающихся маток, не нагружая их вынашиванием потомства. Это особенно важно для племенных программ, где донорша продолжает выступать или используется ограниченно.',
          },
          {
            title: 'Подходит спортивным кобылм',
            text: 'Аспирацию планируют в удобное окно вне соревновательного сезона или между стартами. Процедура занимает около 30–40 минут под седацией, после чего кобыла может вернуться к обычному режиму.',
          },
          {
            title: 'Решение для проблемных маток',
            text: 'Если классическое воспроизводство не даёт результата — хронический эндометрит, возрастные изменения, травмы половых путей — получение ооцитов напрямую из яичника открывает путь к продолжению племенной линии.',
          },
          {
            title: 'Гибкое планирование в течение года',
            text: 'Аспирацию проводят при наличии фолликулов подходящего размера, не привязываясь жёстко к одному дню овуляции. Повторные процедуры возможны с интервалом 2–3 недели в течение сезона.',
          },
          {
            title: 'Криоконсервация и логистика',
            text: 'Ооциты и эмбрионы можно витрифицировать и хранить в жидком азоте, перенося в удобное время. Это снимает необходимость жёсткой синхронизации донорской и реципиентной кобыл.',
          },
          {
            title: 'Качество вымывания определяет исход',
            text: 'После аспирации ооциты чувствительны к составу среды, температуре и времени обработки. Правильное вымывание в TSM-Asp сохраняет морфологию клеток и задаёт успех всего последующего протокола — отмывки, заморозки и разморозки.',
          },
        ],
        bridge:
          'Именно поэтому каждый этап после аспирации требует специализированной среды. Ниже — как устроен протокол ZOOEMBRIO и какие решения мы предлагаем на каждом шаге.',
      },
      solutionsIntro:
        'Линейка сред ZOOEMBRIO покрывает полный цикл: вымывание, отмывка, витрификация и разморозка. Для каждого этапа — подробное описание процесса и рекомендуемая среда.',
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
            'Витрификация — сверхбыстрая заморозка, при которой клетка переходит в стеклообразное состояние без образования льда. Это позволяет сохранить ооциты и эмбрионы лошадей для длительного хранения в жидком азоте (−196 °C) с высокой выживаемостью после разморозки.',
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
          image: '/images/technology/step-3-vitrification.svg',
          imageAlt: 'Схема витрификации ооцитов с наборами ViT1 и ViT2',
        },
        {
          title: 'Разморозка',
          text: 'При подготовке к переносу или дальнейшей работе применяется набор WaM1 и WaM2 для поэтапного выведения клеток из витрифицированного состояния.',
          product: 'WaM1 / WaM2',
          whatIs:
            'Разморозка — обратный процесс витрификации. Замороженный ооцит извлекают из жидкого азота, быстро нагревают и поэтапно выводят из криопротекторов в рабочую среду. Цель — восстановить жизнеспособность клетки для культивирования, оплодотворения или переноса.',
          howTitle: 'Как выполняется этап',
          howSteps: [
            'Криотоп извлекают из жидкого азота и сразу погружают в водяную баню 37 °C на несколько секунд.',
            'Ооцит переносят в среду WaM1 — она начинает удаление криопротекторов.',
            'Последовательно переносят через порции WaM1 и WaM2 с соблюдением времени экспозиции.',
            'После разморозки оценивают морфологию ооцита и его пригодность для дальнейшего использования.',
            'Восстановленные ооциты используют в программе оплодотворения или культивирования.',
          ],
          mediumNote:
            'Набор WaM1 + WaM2 обеспечивает плавный переход клетки из витрифицированного состояния в рабочую среду без осмотического шока.',
          image: '/images/technology/step-4-thawing.svg',
          imageAlt: 'Схема разморозки ооцита в водяной бане со средами WaM1 и WaM2',
        },
      ],
      note:
        'Все манипуляции выполняются с соблюдением температурного режима и стандартных лабораторных практик. Перед применением среды проходят необходимую эквилибрацию.',
    },
    products: {
      title: 'Линейка сред ZOOEMBRIO',
      subtitle: 'Четыре группы продуктов закрывают полный цикл in vivo протокола для лошадей.',
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
          name: 'WaM1 / WaM2',
          color: 'magenta',
          packaging: 'Набор из двух компонентов',
          description: 'Комплект сред для разморозки витрифицированных эмбрионов и ооцитов.',
          volumes: ['Набор WaM1 + WaM2'],
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
        imageAlt: 'Фото производственной лаборатории',
        isoLabel: 'Сертификация ISO',
        isoText:
          'Производство сертифицировано по стандартам ISO. Система менеджмента качества охватывает разработку рецептур, производство, контроль готовой продукции и отгрузку.',
        isoBadgeAlt: 'Сертификат ISO',
      },
      formulation: {
        title: 'Собственная рецептура и валидация',
        text: 'В лаборатории ZOOEMBRIO мы с нуля разработали и довели до производства все составы линейки — TSM-Asp, Wash, ViT1/ViT2 и WaM1/WaM2. Каждая рецептура создана под свой этап протокола in vivo оплодотворения лошадей и прошла полный цикл валидации: лабораторные и прикладные испытания, MEA-тесты на эмбриотоксичность и контроль бактериальных эндотоксинов. В серийный выпуск среды перешли только после подтверждения безопасности и эффективности.',
        items: [
          {
            title: 'Разработка рецептур',
            text: 'Составы TSM-Asp, Wash, ViT1/ViT2 и WaM1/WaM2 разработаны и оптимизированы в лаборатории ZOOEMBRIO с учётом специфики работы с ооцитами и эмбрионами лошадей.',
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
          text: 'Текущий фокус — лошади. В перспективе планируется расширение на среды для КРС и расходные пластиковые материалы.',
        },
      ],
    },
    partners: {
      title: 'Наши партнёры',
      subtitle:
        'Лаборатории, племенные заводы и репродуктивные центры, которые применяют среды ZOOEMBRIO в протоколах in vivo оплодотворения лошадей.',
      items: [
        {
          name: 'Партнёр 1',
          role: 'Репродуктивная лаборатория',
          text: 'Использует полный цикл сред ZOOEMBRIO — от вымывания TSM-Asp до разморозки WaM1/WaM2.',
          imageAlt: 'Фото партнёра',
        },
        {
          name: 'Партнёр 2',
          role: 'Конный завод',
          text: 'Работает с нашими средами в сезонный протокол оплодотворения племенных кобыл.',
          imageAlt: 'Фото партнёра',
        },
        {
          name: 'Партнёр 3',
          role: 'Лаборатория АРТ',
          text: 'Применяет Wash, ViT1/ViT2 и WaM1/WaM2 в ежедневной лабораторной практике.',
          imageAlt: 'Фото партнёра',
        },
      ],
    },
    reviews: {
      title: 'Отзывы',
      subtitle: 'Мнения специалистов, которые работают с нашими средами на практике.',
      items: [
        {
          quote:
            'Стабильный состав и предсказуемое поведение сред на всех этапах протокола — от аспирации до разморозки. Удобные фасовки под наш рабочий процесс.',
          author: 'Специалист по репродукции',
          role: 'Репродуктивная лаборатория',
        },
        {
          quote:
            'TSM-Asp в мешках для инфузий закрывает задачу вымывания без лишних переливаний. Партии приходят с полным комплектом документации.',
          author: 'Главный ветеринарный врач',
          role: 'Племенной конный завод',
        },
        {
          quote:
            'Наборы ViT и WaM хорошо стыкуются с нашим протоколом витрификации. Команда ZOOEMBRIO оперативно отвечает на вопросы по применению.',
          author: 'Эмбриолог',
          role: 'Лаборатория АРТ',
        },
      ],
    },
    homeProduction: {
      title: 'Наше производство',
      text: 'ZOOEMBRIO выпускает среды АРТ в стерильных условиях на собственной площадке. Производство сертифицировано по ISO — мы контролируем рецептуру, приготовление и розлив от сырья до готовой партии.',
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
          text: 'Расширение портфеля на крупный рогатый скот с сохранением единого стандарта качества ZOOEMBRIO.',
          badge: 'Скоро',
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
      subtitle: 'Оставьте заявку — мы отправим прайс, состав сред и рекомендации по применению.',
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
      tagline: 'Среды АРТ для in vivo оплодотворения лошадей',
      rights: '© ZOOEMBRIO. Все права защищены.',
    },
  },
  en: {
    meta: {
      title: 'ZOOEMBRIO — ART media for equine in vivo fertilization',
      description:
        'Manufacturer of media for washing, rinsing, freezing and thawing of equine oocytes and embryos. TSM-Asp, Wash, ViT1/2, WaM1/2 product line.',
    },
    nav: [
      { href: '/', label: 'Home' },
      { href: '/technology', label: 'Technology' },
      { href: '/products', label: 'Products' },
      { href: '/about', label: 'Production' },
      { href: '/contact', label: 'Contact' },
    ],
    hero: {
      eyebrow: 'ZOOEMBRIO · Assisted Reproductive Technologies',
      title: 'ART media for equine in vivo fertilization',
      subtitle:
        'Full-cycle support: washing, rinsing, vitrification and thawing. In-house manufacturing, expert formulations, consistent batch quality.',
      ctaPrimary: 'Request price list',
      ctaSecondary: 'View technology',
      stats: [
        { value: '4', label: 'product groups' },
        { value: '1000–3000', label: 'ml TSM-Asp in infusion bags' },
        { value: 'in vivo', label: 'equine protocol' },
      ],
    },
    trust: {
      title: 'Expert approach at every stage',
      items: [
        {
          title: 'Equine specialization',
          text: 'Media designed for the in vivo fertilization protocol, supporting the full path from washing to thawing.',
        },
        {
          title: 'Production control',
          text: 'Every batch undergoes incoming raw material inspection and final product release testing before shipment.',
        },
        {
          title: 'Practical formats',
          text: 'Packaging volumes and formats are selected for real-world use in laboratories.',
        },
      ],
    },
    technology: {
      title: 'Equine in vivo fertilization technology',
      subtitle:
        'The ZOOEMBRIO protocol is built around four sequential stages. Each medium addresses a specific task at a defined point in the process.',
      advantages: {
        title: 'Advantages of oocyte collection and washing technology',
        subtitle:
          'Transvaginal oocyte aspiration (OPU) followed by washing is the foundation of the equine in vivo protocol',
        intro:
          'Unlike classical embryo flushing — where the mare must be bred and carry the embryo — oocyte aspiration collects gametes directly from the ovary of a live mare. The first and critically important laboratory step after aspiration is washing: separating oocytes from follicular fluid in a specialized medium while maintaining their viability.',
        items: [
          {
            title: 'Genetics from valuable mares without pregnancy',
            text: 'Oocytes can be collected from outstanding broodmares without the burden of carrying offspring. This is especially important in breeding programs where the donor continues to compete or has limited availability.',
          },
          {
            title: 'Suitable for performance mares',
            text: 'Aspiration is scheduled in a convenient window outside the competition season or between events. The procedure takes about 30–40 minutes under sedation, after which the mare can return to normal activity.',
          },
          {
            title: 'A solution for problem mares',
            text: 'When conventional reproduction fails — chronic endometritis, age-related changes, reproductive tract injuries — direct oocyte collection from the ovary opens a path to continue the breeding line.',
          },
          {
            title: 'Flexible year-round planning',
            text: 'Aspiration is performed when follicles of suitable size are present, without strict dependence on a single ovulation day. Repeat procedures are possible at 2–3 week intervals during the season.',
          },
          {
            title: 'Cryopreservation and logistics',
            text: 'Oocytes and embryos can be vitrified and stored in liquid nitrogen for transfer at a convenient time. This removes the need for tight synchronization between donor and recipient mares.',
          },
          {
            title: 'Washing quality determines the outcome',
            text: 'After aspiration, oocytes are sensitive to medium composition, temperature and handling time. Proper washing in TSM-Asp preserves cell morphology and sets the success of the entire subsequent protocol — rinsing, freezing and thawing.',
          },
        ],
        bridge:
          'That is why every step after aspiration requires a specialized medium. Below is how the ZOOEMBRIO protocol is structured and which solutions we offer at each stage.',
      },
      solutionsIntro:
        'The ZOOEMBRIO product line covers the full cycle: washing, rinsing, vitrification and thawing. For each stage — a detailed process description and the recommended medium.',
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
            'Vitrification is ultra-rapid freezing in which the cell enters a glass-like state without ice crystal formation. This allows equine oocytes and embryos to be stored long-term in liquid nitrogen (−196 °C) with high survival after thawing.',
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
          image: '/images/technology/step-3-vitrification.svg',
          imageAlt: 'Diagram of oocyte vitrification with ViT1 and ViT2 kits',
        },
        {
          title: 'Thawing',
          text: 'The WaM1 and WaM2 kit is applied for stepwise recovery of vitrified cells before transfer or further handling.',
          product: 'WaM1 / WaM2',
          whatIs:
            'Thawing is the reverse of vitrification. The frozen oocyte is removed from liquid nitrogen, rapidly warmed and stepwise recovered from cryoprotectants into working medium. The goal is to restore cell viability for culture, fertilization or transfer.',
          howTitle: 'How the stage is performed',
          howSteps: [
            'The cryotop is removed from liquid nitrogen and immediately immersed in a 37 °C water bath for several seconds.',
            'The oocyte is transferred to WaM1 medium — it begins cryoprotectant removal.',
            'Sequential transfers through WaM1 and WaM2 portions with controlled exposure times.',
            'After thawing, oocyte morphology and suitability for further use are assessed.',
            'Recovered oocytes are used in fertilization or culture programs.',
          ],
          mediumNote:
            'The WaM1 + WaM2 kit provides a smooth transition of the cell from vitrified state to working medium without osmotic shock.',
          image: '/images/technology/step-4-thawing.svg',
          imageAlt: 'Diagram of oocyte thawing in a water bath with WaM1 and WaM2 media',
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
          name: 'WaM1 / WaM2',
          color: 'magenta',
          packaging: 'Two-component kit',
          description: 'Media kit for thawing vitrified embryos and oocytes.',
          volumes: ['WaM1 + WaM2 kit'],
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
        imageAlt: 'Production laboratory photo',
        isoLabel: 'ISO certification',
        isoText:
          'Manufacturing is certified to ISO standards. The quality management system covers formulation development, production, finished product control and shipment.',
        isoBadgeAlt: 'ISO certificate',
      },
      formulation: {
        title: 'Proprietary formulations and validation',
        text: 'At the ZOOEMBRIO laboratory we developed every formulation in our line from scratch — TSM-Asp, Wash, ViT1/ViT2 and WaM1/WaM2. Each recipe targets a specific stage of the equine in vivo fertilization protocol and completed full validation: laboratory and applied testing, MEA embryo toxicity assays and bacterial endotoxin control. Media entered serial production only after safety and performance were confirmed.',
        items: [
          {
            title: 'Formulation development',
            text: 'TSM-Asp, Wash, ViT1/ViT2 and WaM1/WaM2 compositions are developed and optimized in the ZOOEMBRIO laboratory for equine oocyte and embryo work.',
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
          text: 'Current focus is equine. Cattle media and plastic consumables are planned for the future.',
        },
      ],
    },
    partners: {
      title: 'Our partners',
      subtitle:
        'Laboratories, breeding farms and reproductive centers using ZOOEMBRIO media in equine in vivo fertilization protocols.',
      items: [
        {
          name: 'Partner 1',
          role: 'Reproductive laboratory',
          text: 'Uses the full ZOOEMBRIO media cycle — from TSM-Asp washing to WaM1/WaM2 thawing.',
          imageAlt: 'Partner photo',
        },
        {
          name: 'Partner 2',
          role: 'Breeding farm',
          text: 'Works with our media in seasonal in vivo fertilization protocols for broodmares.',
          imageAlt: 'Partner photo',
        },
        {
          name: 'Partner 3',
          role: 'ART laboratory',
          text: 'Applies Wash, ViT1/ViT2 and WaM1/WaM2 in daily laboratory practice.',
          imageAlt: 'Partner photo',
        },
      ],
    },
    reviews: {
      title: 'Testimonials',
      subtitle: 'Feedback from specialists who use our media in daily practice.',
      items: [
        {
          quote:
            'Consistent composition and predictable performance at every protocol stage — from aspiration to thawing. Packaging formats fit our workflow.',
          author: 'Reproduction specialist',
          role: 'Reproductive laboratory',
        },
        {
          quote:
            'TSM-Asp in infusion bags handles washing without extra transfers. Batches arrive with complete documentation.',
          author: 'Chief veterinarian',
          role: 'Breeding farm',
        },
        {
          quote:
            'ViT and WaM kits integrate well with our vitrification protocol. The ZOOEMBRIO team responds quickly to application questions.',
          author: 'Embryologist',
          role: 'ART laboratory',
        },
      ],
    },
    homeProduction: {
      title: 'Our production',
      text: 'ZOOEMBRIO manufactures ART media under sterile conditions at our own facility. ISO-certified production — we control formulation, preparation and filling from raw materials to finished batch.',
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
          text: 'Portfolio expansion to bovine applications under the same ZOOEMBRIO quality standard.',
          badge: 'Coming soon',
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
      subtitle: 'Send a request and we will provide pricing, compositions and application guidelines.',
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
      tagline: 'ART media for equine in vivo fertilization',
      rights: '© ZOOEMBRIO. All rights reserved.',
    },
  },
};

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
