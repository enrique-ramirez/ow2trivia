import type { HeroesNames } from "../heroes";

type FrejaFact = {
  hero: Extract<HeroesNames, "Freja">;
  description: string;
};

const FrejaFacts: FrejaFact[] = [
  {
    hero: "Freja",
    description:
      "Freja's name is the same as Freyja, a goddess from Norse mythology. Her surname, Skov, is of Danish origin and means forest.",
  },
  {
    hero: "Freja",
    description: "Freja's favourite animal is the stoat.",
  },
  {
    hero: "Freja",
    description:
      "Only 8 heroes melee exclusively with their right hand: Freja, Sombra, Hanzo, Reaper, Tracer, Illari, Kiriko and Mercy.",
  },
  {
    hero: "Freja",
    description:
      "Freja's bola shot remains attached to Reaper even in wraith mode!",
  },
];

export { FrejaFacts };
