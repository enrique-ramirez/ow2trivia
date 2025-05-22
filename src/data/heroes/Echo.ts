import type { HeroesNames } from "../heroes";

type EchoFact = {
  hero: Extract<HeroesNames, "Echo">;
  description: string;
};

const EchoFacts: EchoFact[] = [
  {
    hero: "Echo",
    description:
      "Echo was the last hero to join the roster in OW1, being added in April 14th, 2020.",
  },
  {
    hero: "Echo",
    description:
      "Some of Echo's voice lines use Singlish phrases, which is an english based language in Singapore, where Mina Liao (echo's creator) is from.",
  },
  {
    hero: "Echo",
    description:
      "Echo is canonically the most advanced piece of technology in the Overwatch setting.",
  },
  {
    hero: "Echo",
    description:
      "Echo is the only hero from the original Overwatch that didn't get a common 'Overwatch 2' skin.",
  },
  {
    hero: "Echo",
    description:
      "Echo has over 750 voice lines, accounting for both her own lines and duplicated lines from other characters.",
  },
];

export { EchoFacts };
