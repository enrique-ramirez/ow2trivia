import type { HeroesNames } from "../heroes";

type AnaFact = {
  hero: Extract<HeroesNames, "Ana">;
  description: string;
};

const AnaFacts: AnaFact[] = [
  {
    hero: "Ana",
    description:
      "In Cassidy/Baptiste interactions in Overwatch 2, it is confirmed that Talon has a bounty on Ana's head, and that it is larger than the one on Cassidy's. Assuming that this is the same bounty Orisa mentions in the original game, the price on Ana is over $60 million.",
  },
  {
    hero: "Ana",
    description:
      "The A-7000 (a sniper-type omnic utilized by Null Sector) was a failed attempt to replicate the conciousness of Ana Amari inside a robotic frame. Though the unit gained Amari's ruthlessness and skill, fragments of Amari's memories corrupted the frame's memory banks.",
  },
  {
    hero: "Ana",
    description:
      "Ana was the first hero, and support hero specifically, to be added to the roster following the launch of Overwatch, joining Lucio, Mercy and Zen.",
  },
  {
    hero: "Ana",
    description:
      "Ana's story draws parallels with the story of Horus from Egyptian mythology. During an altercation with a former friend (in this case, Widowmaker), she lost her eye.",
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
