import type { HeroesNames } from "../heroes";

type TorbjornFact = {
  hero: Extract<HeroesNames, "Torbjorn">;
  description: string;
};

const TorbjornFacts: TorbjornFact[] = [
  {
    hero: "Torbjorn",
    description:
      "Torbjörn's abilities and turret bear a resemblance to the Engineer from Valve's Team Fortress 2.",
  },
  {
    hero: "Torbjorn",
    description:
      "“Torbjörn“ is a Scandinavian masculine given name that comes from Old Norse and translates to “Thor bear“ or “thunder bear“.",
  },
  {
    hero: "Torbjorn",
    description:
      "Torbjörn is also the name of a chair produced by Ikea, headquartered in Sweden. Torbjörn seems to be a fan of the brand, having many instruction manual sprays.",
  },
  {
    hero: "Torbjorn",
    description:
      "Ganymede (Bastion's pet bird) often tries to make a nest in Torbjörn's beard.",
  },
];

export { TorbjornFacts };
