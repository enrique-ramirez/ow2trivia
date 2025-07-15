import type { HeroesNames } from "../heroes";

type LucioFact = {
  hero: Extract<HeroesNames, "Lucio">;
  description: string;
};

const LucioFacts: LucioFact[] = [
  {
    hero: "Lucio",
    description:
      "Lúcio apparently knows enough of the pro-gaming scene to be a fan of D.Va. She in turn is a fan of his music, and has bought his album.",
  },
  {
    hero: "Lucio",
    description:
      "In a February 2024 poll, Lúcio was voted as the most enjoyable hero to play as.",
  },
  {
    hero: "Lucio",
    description:
      "An early concept of Lúcio featured turntables on his hips and equalizer parts that would light up when he played music.",
  },
  {
    hero: "Lucio",
    description:
      "Similar to Roadhog and Kiriko, Lúcio does not have an accent of his native country (Brazil). His voice actor, Jonny Cruz is American with Spanish heritage.",
  },
  {
    hero: "Lucio",
    description:
      "A Soundwave skin for Lúcio was considered in the Transformers collaboration, but was dropped.",
  },
  {
    hero: "Lucio",
    description:
      "Lucio can trigger his ult while suspended in the air in Sigma's Flux! No need to touch grass!",
  },
  {
    hero: "Lucio",
    description: "Lucio can boop Junkrat's tire!",
  },
];

export { LucioFacts };
