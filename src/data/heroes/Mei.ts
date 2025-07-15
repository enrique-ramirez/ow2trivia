import type { HeroesNames } from "../heroes";

type MeiFact = {
  hero: Extract<HeroesNames, "Mei">;
  description: string;
};

const MeiFacts: MeiFact[] = [
  {
    hero: "Mei",
    description:
      "The name Mei-Ling translaten to “beautiful“ and “spirit“ in Chinese, thus meaning “beautiful spirit“.",
  },
  {
    hero: "Mei",
    description:
      "Mei's biological age, 31, does not include her time spent in cryostasis. Her chronological age is roughly 40.",
  },
  {
    hero: "Mei",
    description:
      "Michael Chu has joken that Mei's “superpower“ is being optimistic in the face of overwhelming odds.",
  },
  {
    hero: "Mei",
    description:
      "Early versions of Mei were an explorer outfitted with climbing gear and bounty hunter who used an ice gun to freeze captured bounties in cryostasis.",
  },
  {
    hero: "Mei",
    description:
      "If timed correctly, Mei's wall can be placed right where Doomfist's ult will land, moving the damage area top and keeping teammates safe!",
  },
  {
    hero: "Mei",
    description:
      "Mei's primary fire freezes enemies caught in blizzard faster!",
  },
];

export { MeiFacts };
