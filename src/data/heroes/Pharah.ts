import type { HeroesNames } from "../heroes";

type PharahFact = {
  hero: Extract<HeroesNames, "Pharah">;
  description: string;
};

const PharahFacts: PharahFact[] = [
  {
    hero: "Pharah",
    description:
      "As of October 2023, Pharah has spent 146,621 days in the air through combined playtime.",
  },
  {
    hero: "Pharah",
    description:
      "Pharah's design is a reference to the ancient Egyptian falcon-god Horus, god of the sky and protector of the pharaoh.",
  },
  {
    hero: "Pharah",
    description:
      "Both Pharah and her mother Ana have the same Eye of Horus tattoo.",
  },
  {
    hero: "Pharah",
    description: "Pharah is good at basketball!",
  },
  {
    hero: "Pharah",
    description:
      "The combination of Zarya's Graviton Surge and Pharah's Barrage is actually canon! They both created the maneuver under Winston's reformed Overwatch.",
  },
];

export { PharahFacts };
