import type { HeroesNames } from "../heroes";

type JunkerQueenFact = {
  hero: Extract<HeroesNames, "JunkerQueen">;
  description: string;
};

const JunkerQueenFacts: JunkerQueenFact[] = [
  {
    hero: "JunkerQueen",
    description:
      "Junker Queen's axe is named ”Carnage”. Her knife's name is ”Gracie”.",
  },
  {
    hero: "JunkerQueen",
    description:
      "Junker Queen is the only human ever able to best Wrecking Ball in combat, earing his respect and mentioning she has “earned her arrogance“ unlike most humans.",
  },
];

export { JunkerQueenFacts };
