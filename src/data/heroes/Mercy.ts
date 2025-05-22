import type { HeroesNames } from "../heroes";

type MercyFact = {
  hero: Extract<HeroesNames, "Mercy">;
  description: string;
};

const MercyFacts: MercyFact[] = [
  {
    hero: "Mercy",
    description:
      "In September 2021, Christiane Louise, Mercy's Brazilian voice actress, was reported murdered.",
  },
  {
    hero: "Mercy",
    description:
      "Mercy's name is localized as “Angel“ in the French, Russian and Chinese Mandarin versions of the game.",
  },
  {
    hero: "Mercy",
    description:
      "Mercy is a fan of the apple pie Torbjörn's wife make for the holidays.",
  },
];

export { MercyFacts };
