import type { HeroesNames } from "../heroes";

type AnaFact = {
  hero: Extract<HeroesNames, "Ana">;
  description: string;
};

const AnaFacts: AnaFact[] = [
  {
    hero: "Ana",
    description:
      "In Cassidy/Baptiste interactions in OW2 it's confirmed that Talon has a bounty on Ana's head and that it's larger than the one on Cassidy's. The price on Ana's head is over $60 million!",
  },
  {
    hero: "Ana",
    description:
      "The A-7000, a sniper-type Null Sector omnic, was a failed attempt to replicate Ana Amari’s mind. Though skilled and ruthless, fragments of her memories corrupted its systems.",
  },
  {
    hero: "Ana",
    description:
      "Ana was the first hero, and support hero specifically, to be added to the roster following the launch of Overwatch, joining Lucio, Mercy and Zen.",
  },
  {
    hero: "Ana",
    description:
      "Ana's story draws parallels with the story of Horus from Egyptian mythology. For example, during an altercation with a former friend (in this case, Widowmaker), she lost her eye.",
  },
  {
    hero: "Ana",
    description: "As of May 2025, Ana is the most played hero in the series.",
  },
  {
    hero: "Ana",
    description: "Ana's sleep dart does 5 damage!",
  },
];

export { AnaFacts };
