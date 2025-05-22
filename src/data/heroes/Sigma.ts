import type { HeroesNames } from "../heroes";

type SigmaFact = {
  hero: Extract<HeroesNames, "Sigma">;
  description: string;
};

const SigmaFacts: SigmaFact[] = [
  {
    hero: "Sigma",
    description:
      "Sigma's Gravitic Flux is the only ability in the game that does fall damage.",
  },
  {
    hero: "Sigma",
    description:
      "Sigma is currently the oldest character in the hero line-up, being 64 years old.",
  },
  {
    hero: "Sigma",
    description:
      "Sigma's hero select voice line, “There is no obligation for the universe to make sense to you,“ is a quote from famous astrophysicist Neil deGrasse Tyson.",
  },
  {
    hero: "Sigma",
    description: "Sigma's favourite animal is the tardigrade!",
  },
];

export { SigmaFacts };
