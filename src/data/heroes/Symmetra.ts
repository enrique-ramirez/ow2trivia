import type { HeroesNames } from "../heroes";

type SymmetraFact = {
  hero: Extract<HeroesNames, "Symmetra">;
  description: string;
};

const SymmetraFacts: SymmetraFact[] = [
  {
    hero: "Symmetra",
    description:
      "Symmetra used to be a Support character when the game first launched.",
  },
  {
    hero: "Symmetra",
    description:
      "Symmetra's voice actress (Anjali Bhimani) is the same voice actress than Apex Legends' Rampart.",
  },
  {
    hero: "Symmetra",
    description:
      "Symmetra is an amputee, missing her left arm. It is unknown how or when she lost it.",
  },
];

export { SymmetraFacts };
