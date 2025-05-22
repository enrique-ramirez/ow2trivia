import type { HeroesNames } from "../heroes";

type WinstonFact = {
  hero: Extract<HeroesNames, "Winston">;
  description: string;
};

const WinstonFacts: WinstonFact[] = [
  {
    hero: "Winston",
    description: "Winston's Jump Pack ability does 1 damage when taking off.",
  },
  {
    hero: "Winston",
    description:
      "The glasses Winston wears are the same ones that belonged to Harold Winston. Thematically, they represent the older generation (Harold) handing the world off to the new one.",
  },
];

export { WinstonFacts };
