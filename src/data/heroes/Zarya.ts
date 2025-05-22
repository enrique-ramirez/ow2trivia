import type { HeroesNames } from "../heroes";

type ZaryaFact = {
  hero: Extract<HeroesNames, "Zarya">;
  description: string;
};

const ZaryaFacts: ZaryaFact[] = [
  {
    hero: "Zarya",
    description:
      "Zarya has a tattoo that reads 512 on her left shoulder, which is her weightlifting record when she was an active athlete. This is a higher record than any woman's set in the Olympics to date, though not the highest ever recorded.",
  },
  {
    hero: "Zarya",
    description:
      "Zarya's particle cannon was ripped from the hull of an armored vehicle during battle, and is too heavy for most soldiers to carry. Her gloves conduct and amplify the energy flowing through it.",
  },
  {
    hero: "Zarya",
    description:
      "According to Michael Chu (senior designer for lore and story in Overwatch), in an arm-wrestling match between Brigitte and Zarya, Zarya would win.",
  },
  {
    hero: "Zarya",
    description:
      "Rabbits are Zarya's favorite animal, specifically large ones.",
  },
];

export { ZaryaFacts };
