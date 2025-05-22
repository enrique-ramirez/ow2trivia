import type { HeroesNames } from "../heroes";

type SojournFact = {
  hero: Extract<HeroesNames, "Sojourn">;
  description: string;
};

const SojournFacts: SojournFact[] = [
  {
    hero: "Sojourn",
    description:
      "Despite debuting as a playable character in April 26th, 2022; Sojourn first appearance was in the Recall cinematic (released in March 23rd, 2016) at around minute 7:20 as a quick flash.",
  },
  {
    hero: "Sojourn",
    description: "Sojourn is widely respected by most of the game's heroes.",
  },
];

export { SojournFacts };
