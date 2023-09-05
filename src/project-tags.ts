import cSharpLogo from "@/assets/CSharpLogo.webp";
import ffxivLogo from "@/assets/FFXIVMeteor.svg";

interface ProjectTag {
  icon: string | string[];
  name: string;
}

export const tags: {[key: string]: ProjectTag} = {
  "lang-python": {
    icon: ["fab", "python"],
    name: "Python",
  },
  "lang-js": {
    icon: ["fab", "js-square"],
    name: "JavaScript",
  },
  "lang-csharp": {
    icon: cSharpLogo,
    name: "C#",
  },
  "topic-pl": {
    icon: ["fas", "code"],
    name: "Programming Languages",
  },
  "topic-nlp": {
    icon: ["fas", "brain"],
    name: "NLP",
  },
  "topic-ds": {
    icon: ["fas", "sitemap"],
    name: "Distributed Systems",
  },
  "lib-vue": {
    icon: ["fab", "vuejs"],
    name: "Vue",
  },
  "lib-angular": {
    icon: ["fab", "angular"],
    name: "Angular",
  },
  "infra-aws": {
    icon: ["fab", "aws"],
    name: "AWS",
  },
  "infra-gcp": {
    icon: ["fab", "google"],
    name: "GCP",
  },
  "game-dnd": {
    icon: ["fab", "d-and-d"],
    name: "Dungeons & Dragons",
  },
  "game-ffxiv": {
    icon: ffxivLogo,
    name: "Final Fantasy XIV",
  },
};
