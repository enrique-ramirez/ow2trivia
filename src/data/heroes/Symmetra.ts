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
  {
    hero: "Symmetra",
    description:
      "Symmetra's teleporter can get out from Mauga's cage and Junkrat's traps!",
  },
  {
    hero: "Symmetra",
    description:
      "Symmetra's turrets can block any non-piercing projectile in the game, like Road's hook and Cassidy's deadeye!",
  },
  {
    hero: "Symmetra",
    description:
      "Symmetra can teleport all sorts of things! Some fun ones are DVA bombs, BOBs, Rip tires, Torb turrets and Illari's pylons!",
  },
];

export { SymmetraFacts };
