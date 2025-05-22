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
      "While other omnics such as Zenyatta and Orisa have been shown to inexplicably identify as gendered, Bastion was the only playable omnic confirmed to not do so and was referred to with 'it' pronouns in official material.",
  },
  {
    hero: "Bastion",
    description:
      "Bastion's ZER ZER EE NUM voice line is a direct reference to the Terminator series.",
  },
  {
    hero: "Bastion",
    description:
      "There was a period in development when Bastion was an 'Ultimate [ability] generator' when it had many Ultimate abilities that ended up being passed to other heroes. Its original Ultimate ability was a remote mine that could be driven like an RC car before burrowing into the ground.",
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
