export const projects = [
  {
    name: "Kani",
    tagline: "Build AI apps faster and cleaner than ever before.",
    description:
      "Kani is a lightweight, flexible, and model-agnostic framework for developing language model applications. Kani helps developers implement a variety of complex features by supporting the core building blocks of chat interaction: model interfacing, chat management, and robust function calling. Researchers, hobbyists, and industry professionals alike can use Kani to accelerate their development.",
    date: "2023 - current",
    banner: null,
    icon: "assets/kani-logo.png",
    tags: ["lang-python", "topic-pl", "topic-nlp"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/zhudotexe/kani",
      },
      {
        name: "Docs",
        href: "https://kani.readthedocs.io/en/latest/",
      },
    ],
  },
  {
    name: "The Paissa Stack",
    tagline: "Look into their eyes.",
    description:
      "Built in response to the Final Fantasy XIV housing crisis, the Paissa Stack combines a distributed data collection agent with a low-power central server. It'll broadcast when houses become available on your server, and the data helps us learn about the hidden housing timers.",
    date: "2021 - current",
    banner: "assets/PaissaBanner.webp",
    icon: "assets/PaissaLogo.png",
    tags: ["lang-csharp", "lang-python", "topic-ds", "game-ffxiv"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/zhudotexe/FFXIV_PaissaHouse",
      },
      {
        name: "PaissaDB",
        href: "/paissa",
        routerLink: true,
      },
    ],
  },
  {
    name: "Avrae",
    tagline: "Just roll with it.",
    description:
      "Avrae is the world's largest Discord bot designed to help players and Dungeon Masters around the world play D&D together online. Rolling with over 5 million users across over 500,000 Discord servers since 2016.",
    date: "2016 - 2023",
    banner: "assets/AvraeBanner.webp",
    icon: "assets/AvraeLogo.png",
    tags: ["lang-python", "lang-js", "lib-angular", "infra-aws", "game-dnd"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/avrae/avrae",
      },
      {
        name: "Website",
        href: "https://avrae.io/",
      },
    ],
  },
  {
    name: "zhu.codes",
    tagline: "Getting meta",
    description:
      "This site was built using a FastAPI backend and Vue 3 frontend. It's a lot more than just a static site — try and see if you can encounter all of the variations of this page! (Hint: some components are time or location-specific.)",
    date: "2021 - current",
    banner: null,
    icon: null,
    tags: ["lang-python", "lib-vue"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/zhudotexe/zhu.codes",
      },
    ],
  },
  {
    name: "Draconic Language",
    tagline: "Safe server-side user scripting.",
    description:
      'The Draconic language is built to enable users to write powerful custom commands in Avrae that run on the application layer, while enforcing limits on resource usage. With a custom interpreter built in Python, safety is enforced through both a runtime watchdog and its type system.<br>Draconic is used in production to run over 75 thousand user scripts daily. You can see some user creations on the <a href="https://avrae.io/dashboard/workshop" target="_blank">Avrae Alias Workshop</a>.',
    date: "2020 - 2023",
    banner: null,
    icon: "assets/DraconicLogo.svg",
    tags: ["lang-python", "topic-pl"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/avrae/draconic",
      },
    ],
  },
  {
    name: "d20",
    tagline: "Oops I made a DSL",
    description:
      "d20 is a fast, powerful, safe, and extensible dice engine for D&D, d20 systems, and any other system that needs dice. Built on top of the Lark parser, each roll comes with a rich expression tree that enables applications to have full control over each roll.<br>d20 is used in production to handle millions of dice rolls each day.",
    date: "2020 - 2023",
    banner: null,
    icon: "assets/d20Logo.svg",
    tags: ["lang-python", "topic-pl", "game-dnd"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/avrae/d20",
      },
      {
        name: "PyPI",
        href: "https://pypi.org/project/d20/",
      },
    ],
  },
  {
    name: "AWS Kinesis Tools",
    tagline: "The fastest way to iterate on data heuristics in the West.",
    description:
      'Built in order to quickly iterate on heuristics and filter a large quantity of events captured for the <a href="https://www.cis.upenn.edu/~ccb/language-to-avrae.html" target="_blank">Avrae NLP project</a> at UPenn, the Kinesis Tools are a blazing-fast (>10GB/min) way to explore a structured dataset.<br><a href="mailto:me@andrew-zhu.com" target="_blank">Contact me</a> for help using these tools for your own data science project!',
    date: "2022",
    banner: null,
    icon: "assets/KinesisToolsLogo.svg",
    tags: ["lang-python", "topic-nlp", "lib-vue", "infra-aws"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/zhudotexe/aws-kinesis-dataset-exploration-tool",
      },
    ],
  },
  {
    name: "Dicecloud Tools",
    tagline: "New characters simplified.",
    description:
      "The Dicecloud Tools are an old project meant to help users create new characters and manage their spellbooks in Dicecloud with minimal effort.<br>The Dicecloud Tools are looking for new maintainers!",
    date: "2018 - 2020",
    banner: null,
    icon: "assets/DicecloudLogo.png",
    tags: ["lang-js", "game-dnd"],
    links: [
      {
        name: "Autochar",
        href: "dnd/dicecloudtools/autochar.html",
      },
      {
        name: "Spell Manager",
        href: "dnd/dicecloudtools/spellbook.html",
      },
    ],
  },
  {
    name: "Iris",
    tagline: "An AI-powered virtual assistant.",
    description:
      "Built at CruzHacks 2019, Iris combines wearable technology and facial recognition in an AI-powered virtual assistance to help Alzheimer's patients combat memory loss.<br><em>Winner: Tech Cares, Best Use of Google Cloud Platform</em>",
    date: "2019",
    banner: null,
    icon: "assets/IrisLogo.jpeg",
    tags: ["lang-python", "lib-angular", "infra-gcp"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/CruzHacks2019/iris-frontend",
      },
      {
        name: "Devpost",
        href: "https://devpost.com/software/iris-io",
      },
    ],
  },
];
