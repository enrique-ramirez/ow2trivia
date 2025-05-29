import type { HeroesNames } from "../heroes";

type WidowmakerFact = {
  hero: Extract<HeroesNames, "Widowmaker">;
  description: string;
};

const WidowmakerFacts: WidowmakerFact[] = [
  {
    hero: "Widowmaker",
    description:
      "Widowmaker's tattoo on her right forearm reads “araignée du soir, Cauchemar“, which translates to “spider in the evening, Nightmare“. It comes from an old French superstition.",
  },
  {
    hero: "Widowmaker",
    description:
      "Widowmaker's Dame Chance rifle was gifted to her by Maximilien.",
  },
];

export { WidowmakerFacts };
