import type { HeroesNames } from "../heroes";

type SombraFact = {
  hero: Extract<HeroesNames, "Sombra">;
  description: string;
};

const SombraFacts: SombraFact[] = [
  {
    hero: "Sombra",
    description:
      "Sombra was originally Ana in her shrike skin. They gave her a grappling hook that let her stick to walls similar to how widows is, to give her better sightlines.",
  },
  {
    hero: "Sombra",
    description:
      "Sombra's voice actress (Carolina Ravassa) is the same voice actress from Valorant's Rave.",
  },
  {
    hero: "Sombra",
    description:
      "The ammo counter on Sombra's machine pistol is in hexadecimal, and as such reads 3C when the magazine is full.",
  },
  {
    hero: "Sombra",
    description:
      "Only 8 heroes melee exclusively with their right hand: Sombra, Hanzo, Reaper, Tracer, Illari, Kiriko, Mercy and Freja.",
  },
  {
    hero: "Sombra",
    description: "Sombra is spanish for “shadow“ or “shade“.",
  },
  {
    hero: "Sombra",
    description:
      "Sombra's voice lines “mess with the best, die like the rest“ and “hack the planet“ are direct quotes from the film “Hackers“.",
  },
  {
    hero: "Sombra",
    description: "Sombra's favourite drink is Mezcal.",
  },
  {
    hero: "Sombra",
    description:
      "Sombra considers Reaper and Widowmaker to be genuine friends of hers, but that the friendship is “complicated“.",
  },
  {
    hero: "Sombra",
    description:
      "Mauga once burnt down a Talon server room, making sombra lose a bunch of bank account numbers and her favourite pizza recipes.",
  },
  {
    hero: "Sombra",
    description:
      "Sombra's hack can disable some passive abilities like Lucio's wall ride and Genji/Hanzo/Kiriko's wall crawl! No wonder she's banned most of the time!",
  },
];

export { SombraFacts };
