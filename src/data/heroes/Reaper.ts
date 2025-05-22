import type { HeroesNames } from "../heroes";

type ReaperFact = {
  hero: Extract<HeroesNames, "Reaper">;
  description: string;
};

const ReaperFacts: ReaperFact[] = [
  {
    hero: "Reaper",
    description: "Reaper was soldier 24 in the soldier enhancement program.",
  },
  {
    hero: "Reaper",
    description:
      "Reaper is the only character in the entire roster of OW2 that rather than reloading his weapon he just throws them and gets new ones.",
  },
  {
    hero: "Reaper",
    description: "Reaper wears bandoliers of grenade shells.",
  },
  {
    hero: "Reaper",
    description:
      "According to Reaper's dog tag on his Soldier: 24 skin, his blood type is AB Negative, his soldier ID number is 06 0000 0024, and he has no religion.",
  },
  {
    hero: "Reaper",
    description:
      "Reaper was a big basketball and football fan. His favourite team was the L.A Lakers.",
  },
  {
    hero: "Reaper",
    description:
      "Reaper had a son with her wife Martina Reyes. She remarried after Reaper's presumed death.",
  },
  {
    hero: "Reaper",
    description:
      "Reaper's reload animation is possibly a reference to the lobby shootout scene from The Matrix.",
  },
  {
    hero: "Reaper",
    description:
      "Reapers are a type of unit in the StarCraft series. Like Reaper himself, they dual-wield firearms and wear masks.",
  },
];

export { ReaperFacts };
