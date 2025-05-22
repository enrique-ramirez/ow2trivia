import type { HeroesNames } from "../heroes";

type CassidyFact = {
  hero: Extract<HeroesNames, "Cassidy">;
  description: string;
};

const CassidyFacts: CassidyFact[] = [
  {
    hero: "Cassidy",
    description:
      "Originally named “Jesse McCree“ after a developer at Blizzard, the character's name was changed to “Cole Cassidy“ in 2021 after the developer was fired.",
  },
  {
    hero: "Cassidy",
    description:
      "Cassidy has the most ways to reload his weapon out of all characters. His standard reload, his Combat Roll and Deadeye abilities, and an emote.",
  },
  {
    hero: "Cassidy",
    description:
      "Cassidy's belt buckle has an engraving that spells 'BAMF', which is an acronym of 'Bad Ass Mother F*cker'.",
  },
  {
    hero: "Cassidy",
    description:
      "Cassidy's Peacekeeper revolver was built by a legendary gunsmith and fires custom high-caliber ammunition with technological enhancements.",
  },
  {
    hero: "Cassidy",
    description:
      "Cassidy's revolver name 'Peacekeeper' is likely a reference to the colloquial nickname of the Colt Single Action Army revolver, popularly known as the Colt Peacemaker.",
  },
  {
    hero: "Cassidy",
    description:
      "Cassidy appears to be aware that Baptiste is attracted to him. In one of his voicelines, he tells to Baptiste that he reckons he'd miss him too much if he were to leave.",
  },
  {
    hero: "Cassidy",
    description:
      "Cassidy's favorite animal is described to be half black, half white, with a dangly nose, a “fancy jungle pig“/jungle animal with a “funky snout.“",
  },
  {
    hero: "Cassidy",
    description:
      "As hinted by one of Sombra and Cassidy's voice line interactions, at some point, Cassidy had cactus spines in his rectum and he googled how to get rid of them.",
  },
  {
    hero: "Cassidy",
    description:
      "Cassidy's design was based on an old StarCraft sketch by Chris Metzen of a character named Prospector Logann.",
  },
];

export { CassidyFacts };
