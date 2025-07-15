import type { HeroesNames } from "../heroes";

type LifeweaverFact = {
  hero: Extract<HeroesNames, "Lifeweaver">;
  description: string;
};

const LifeweaverFacts: LifeweaverFact[] = [
  {
    hero: "Lifeweaver",
    description:
      "Lifeweaver's last name, Pruksamanee, means “Jewel of the Forest“.",
  },
  {
    hero: "Lifeweaver",
    description:
      "Lifeweaver can pull people out of Mauga's ultimate while they are trapped inside.",
  },
  {
    hero: "Lifeweaver",
    description:
      "It is indicated that Lifeweaver is still in contact with his parents, much to his annoyance.",
  },
  {
    hero: "Lifeweaver",
    description: "There's a price on Lifeweaver's head in 17 countries.",
  },
  {
    hero: "Lifeweaver",
    description:
      "Lifeweaver's nickname of “Bua“ translates as “lotus“ or “waterlily“.",
  },
  {
    hero: "Lifeweaver",
    description:
      "If placed correctly, Lifeweaver's tree can cancel Mei's ult if placed at the same position, as it blocks line of sight.",
  },
  {
    hero: "Lifeweaver",
    description: "You can cancel a Mercy Rez with Lifeweaver's petal!",
  },
];

export { LifeweaverFacts };
