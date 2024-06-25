export interface Paper {
  authors: string[];
  title: string;
  url: string | null;
  year: number;
  conf: string;
  // optional metadata
  website?: string;
  github?: string;
  poster?: string;
  additional?: {title: string; url: string}[];
}

export const papers: Paper[] = [
  // === 2024 ===
  {
    authors: ["Andrew Zhu", "Alyssa Hwang", "Liam Dugan", "Chris Callison-Burch"],
    title: "FanOutQA: A Multi-Hop, Multi-Document Question Answering Benchmark for Large Language Models",
    url: "https://arxiv.org/abs/2402.14116",
    year: 2024,
    conf: "To appear at ACL 2024",
    website: "https://fanoutqa.com/",
    github: "https://github.com/zhudotexe/fanoutqa",
  },
  {
    authors: [
      "Liam Dugan",
      "Alyssa Hwang",
      "Filip Trhlik",
      "Josh Magnus Ludan",
      "Andrew Zhu",
      "Hainiu Xu",
      "Daphne Ippolito",
      "Chris Callison-Burch",
    ],
    title: "RAID: A Shared Benchmark for Robust Evaluation of Machine-Generated Text Detectors",
    url: "https://arxiv.org/abs/2405.07940",
    year: 2024,
    conf: "To appear at ACL 2024",
    website: "https://raid-bench.xyz/",
    github: "https://github.com/liamdugan/raid",
  },
  // === 2023 ===
  {
    authors: ["Andrew Zhu", "Liam Dugan", "Alyssa Hwang", "Chris Callison-Burch"],
    title: "Kani: A Lightweight and Highly Hackable Framework for Building Language Model Applications",
    url: "https://aclanthology.org/2023.nlposs-1.8/",
    year: 2023,
    conf: "3rd Workshop for Natural Language Processing Open Source Software (NLP-OSS @ EMNLP 2023)",
    website: "https://kani.readthedocs.io/en/latest/",
    github: "https://github.com/zhudotexe/kani",
    poster: "/posters/kani.pdf",
  },
  {
    authors: ["Andrew Zhu", "Lara J. Martin", "Andrew Head", "Chris Callison-Burch"],
    title: "CALYPSO: LLMs as Dungeon Masters' Assistants",
    url: "https://ojs.aaai.org/index.php/AIIDE/article/view/27534",
    year: 2023,
    conf: "The 19th AAAI Conference on Artificial Intelligence and Interactive Digital Entertainment (AIIDE 2023)",
    github: "https://github.com/northern-lights-province/calypso-aiide-artifact",
    poster: "/posters/calypso.pdf",
  },
  {
    authors: ["Andrew Zhu", "Karmanya Aggarwal", "Alexander Feng", "Lara J. Martin", "Chris Callison-Burch"],
    title: "FIREBALL: A Dataset of Dungeons and Dragons Actual-Play with Structured Game State Information",
    url: "https://aclanthology.org/2023.acl-long.229/",
    year: 2023,
    conf: "The 61st Annual Meeting of the Association for Computational Linguistics (ACL 2023)",
    github: "https://github.com/zhudotexe/FIREBALL",
    poster: "/posters/fireball.pdf",
  },
  {
    authors: [
      "Pei Zhou",
      "Andrew Zhu",
      "Jennifer Hu",
      "Jay Pujara",
      "Xiang Ren",
      "Chris Callison-Burch",
      "Yejin Choi",
      "Prithviraj Ammanabrolu",
    ],
    title:
      "I Cast Detect Thoughts: Learning to Converse and Guide with Intents and Theory-of-Mind in Dungeons and Dragons",
    url: "https://aclanthology.org/2023.acl-long.624/",
    year: 2023,
    conf: "The 61st Annual Meeting of the Association for Computational Linguistics (ACL 2023)",
  },
  // === 2022 ===
  {
    authors: [
      "Stefan Papazov",
      "Wesley Gill",
      "Marta Garcia Ferreiro",
      "Andrew Zhu",
      "Lara J. Martin",
      "Chris Callison-Burch",
    ],
    title: "Using Language Models to Convert Between Natural Language and Game Commands",
    url: "https://openreview.net/forum?id=jQSStHwtmDN",
    year: 2022,
    conf: "The 3rd Wordplay: When Language Meets Games Workshop @ NAACL 2022",
  },
  {
    authors: ["Jiaheng Wei", "Minghao Liu", "Jiahao Luo", "Andrew Zhu", "James Davis", "Yang Liu"],
    title: "DuelGAN: A Duel Between Two Discriminators Stabilizes the GAN Training",
    url: "https://dl.acm.org/doi/abs/10.1007/978-3-031-20050-2_18",
    year: 2022,
    conf: "European Conference on Computer Vision (ECCV 2022)",
  },
];

export const supervisedPapers: Paper[] = [
  {
    authors: [
      "Samuel Thudium",
      "Federico Cimini",
      "Rut Vyas",
      "Kyle Sullivan",
      "Louis Petro",
      "Andrew Zhu",
      "Chris Callison-Burch",
    ],
    title:
      "Outwit, Outplay, Out-Generate: A Framework for Designing Strategic Generative Agents in Competitive Environments",
    url: null,
    year: 2024,
    conf: "The 4th Wordplay: When Language Meets Games Workshop @ ACL 2024",
  },
  {
    authors: ["Jaewoo Song", "Andrew Zhu", "Chris Callison-Burch"],
    title: "You Have Thirteen Hours in Which to Solve the Labyrinth: Enhancing AI Game Masters with Function Calling",
    url: null,
    year: 2024,
    conf: "The 4th Wordplay: When Language Meets Games Workshop @ ACL 2024",
  },
  {
    authors: [
      "Meiqing Jin",
      "Manvi Kaul",
      "Shriya Ramakrishnan",
      "Hardik Jain",
      "Samarth Chandrawat",
      "Ishita Agarwal",
      "Tianyi Zhang",
      "Andrew Zhu",
      "Chris Callison-Burch",
    ],
    title: "WorldWeaver: Procedural World Generation for Text Adventure Games using Large Language Models",
    url: null,
    year: 2024,
    conf: "The 4th Wordplay: When Language Meets Games Workshop @ ACL 2024",
  },
  {
    authors: ["Chris Callison-Burch", "Ajay Patel", "James Dennis", "Andrew Zhu"],
    title: "DAGGER: Data Augmentation for Generative Gaming in Enriched Realms",
    url: null,
    year: 2024,
    conf: "The 4th Wordplay: When Language Meets Games Workshop @ ACL 2024",
  },
];
