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
      "Widowmaker's “Dame Chance“ rifle was gifted to her by Maximilien, a prominent member of Talon's inner council.",
  },
  {
    hero: "Widowmaker",
    description:
      "Widowmaker's heart has been drastically slowed down by Moira to improve her aim. This turned her skin and blood blue and numbed her ability to experience human emotion.",
  },
  {
    hero: "Widowmaker",
    description:
      "Once an accomplished ballet dancer, Widowmaker was subjected to an intense program of neural reconditioning by Talon. They lated had her kill her husband in his sleep.",
  },
  {
    hero: "Widowmaker",
    description:
      "Despite being his murderer, Widowmaker visited her husband's grave during christmas, leaving a single rose on it.",
  },
];

export { WidowmakerFacts };
