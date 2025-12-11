interface Talk {
  title: string;
  url: string | null;
  year: number;
  venue: string;
  // optional metadata
  website?: string;
  github?: string;
  poster?: string;
  additional?: {title: string; url: string}[];
}

export const talks: Talk[] = [
  // proposal 12/11/2025
  // mark guest lecture 11/24/2025
  // CLunch
  // CCB guest lectures (IFTG, llmPL)
  // aiide
  // emnlp-oss
  // pax east
];
