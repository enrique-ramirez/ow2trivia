import type { HeroesNames } from "../heroes";

type RamattraFact = {
  hero: Extract<HeroesNames, "Ramattra">;
  description: string;
};

const RamattraFacts: RamattraFact[] = [
  {
    hero: "Ramattra",
    description: "Ramattra is the primary antagonist of the Overwatch IP.",
  },
  {
    hero: "Ramattra",
    description:
      "Ramattra's name may be derived from the Sanskrit rāmatra, which roughly translates to “Dark Defender“.",
  },
  {
    hero: "Ramattra",
    description:
      "Ramattra's favourite animal is the ant. He says “they build marvelous structures and coperate when threatened“ and find them inspirational.",
  },
  {
    hero: "Ramattra",
    description:
      "Once a troubling thought, Ramattra's origin as an R-7000 - a model that inspires fear and hatred in humans - now give him “a warm little feeling inside“.",
  },
  {
    hero: "Ramattra",
    description:
      "Ramattra wishes he could have met Aurora (the first sentient omnic) to ask her “the same thing I would ask her every day“.",
  },
];

export { RamattraFacts };
