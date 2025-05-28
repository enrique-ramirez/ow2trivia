import type { HeroesNames } from "../heroes";

type BastionFact = {
  hero: Extract<HeroesNames, "Bastion">;
  description: string;
};

const BastionFacts: BastionFact[] = [
  {
    hero: "Bastion",
    description:
      "The Eichenwalde map contains multiple Bastions, dead, the aftermath of the Eichenwalde battle as seen in The Last Bastion short.",
  },
  {
    hero: "Bastion",
    description:
      "While other omnics such as Zen and Orisa have been shown to identify as gendered, Bastion was the only playable omnic confirmed to not do so and was referred to with 'it' pronouns.",
  },
  {
    hero: "Bastion",
    description:
      "Bastion's ZER ZER EE NUM voice line is a direct reference to the Terminator series.",
  },
  {
    hero: "Bastion",
    description:
      "While in development, Bastion was an 'Ultimate [ability] generator' that had many Ultimate abilities that ended up being passed to other heroes. Junkrat got his ult from here!",
  },
  {
    hero: "Bastion",
    description:
      "Bastion's bird companion is named Ganymede. There's a picture of its species hanging in the hunting lodge in Eichenwalde.",
  },
  {
    hero: "Bastion",
    description:
      "Bastion was the first hero to ever be temporarily removed from the game. He was removed due to a bug tha allowed him to fire infinite artillery shells.",
  },
  {
    hero: "Bastion",
    description:
      "Bastion's bird companion Ganymede changes species on certain skins. The bird's voice matches the skin's species, too!",
  },
];

export { BastionFacts };
