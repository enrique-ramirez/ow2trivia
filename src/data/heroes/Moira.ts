import type { HeroesNames } from "../heroes";

type MoiraFact = {
  hero: Extract<HeroesNames, "Moira">;
  description: string;
};

const MoiraFacts: MoiraFact[] = [
  {
    hero: "Moira",
    description:
      "Moira is an Anglicisation of the Irish name Máire, ultimately derived from the biblical Mary, as well as a Greek name meaning “fate“.",
  },
  {
    hero: "Moira",
    description:
      "Excluding heroes who use both hands to heal, Moira is the only Support hero to heal with her left hand.",
  },
  {
    hero: "Moira",
    description:
      "Moira's “Glam“ and “Moon“ skins are both possible nods to english musician David Bowie.",
  },
  {
    hero: "Moira",
    description:
      "Moira's decrepit right hand is the result of coming into contact with an anomalous genetic experiment, allowing the plasma production in a biotic system.",
  },
  {
    hero: "Moira",
    description: "Moira likes to dress up and enjoys art",
  },
  {
    hero: "Moira",
    description: "Moira's favourite drink is Irish coffee.",
  },
  {
    hero: "Moira",
    description:
      "In the map Oasis, if you approach one of the omnic staff at ElBuffi as Moira it will comment on how her suggestions brought great feedback from customers!",
  },
];

export { MoiraFacts };
