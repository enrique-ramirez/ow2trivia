import type { HeroesNames } from "../heroes";

type VentureFact = {
  hero: Extract<HeroesNames, "Venture">;
  description: string;
};

const VentureFacts: VentureFact[] = [
  {
    hero: "Venture",
    description: "It took Venture 8 months to get her first Legendary skin.",
  },
  {
    hero: "Venture",
    description: "Venture has always wanted to be eaten alive by scarabs.",
  },
  {
    hero: "Venture",
    description:
      "Venture is the only character to have 5 rare skins in Overwatch 2",
  },
];

export { VentureFacts };
