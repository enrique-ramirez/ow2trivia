import type { HeroesNames } from "../heroes";

type DoomfistFact = {
  hero: Extract<HeroesNames, "Doomfist">;
  description: string;
};

const DoomfistFacts: DoomfistFact[] = [
  {
    hero: "Doomfist",
    description:
      "Doomfist's real name is Akande Ogundimu, which roughly translates from Yoruba to 'heir to the god who grasps iron and war'.",
  },
  {
    hero: "Doomfist",
    description:
      "Doomfist's HollaGram (a social media site in the Overwatch universe) account is “Anonymous088503“, a reference of his cell number in the Helix maximum security installation: 88503.",
  },
];

export { DoomfistFacts };
