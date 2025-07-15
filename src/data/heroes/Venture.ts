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
  {
    hero: "Venture",
    description:
      "Venture can't shoot their ult while airborne. This means Hog, Zarya and Sigma's ults can cancel it!",
  },
  {
    hero: "Venture",
    description:
      "Venture's cooldowns reset faster when burrowed! Burrowing also cleanses all negative effects off of Venture.",
  },
  {
    hero: "Venture",
    description:
      "When using Venture's ult, you do NOT need to look at the ground. Whatever direction you face, that's where it'll fire.",
  },
];

export { VentureFacts };
