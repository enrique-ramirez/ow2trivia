import type { HeroesNames } from "../heroes";

type BrigitteFact = {
  hero: Extract<HeroesNames, "Brigitte">;
  description: string;
};

const BrigitteFacts: BrigitteFact[] = [
  {
    hero: "Brigitte",
    description:
      "When asked what was the most overpowered balance change the team has ever made, Geoff Goodman replied, “I'd say at this point its pretty clear Brigitte's.“",
  },
  {
    hero: "Brigitte",
    description:
      "Brigitte's name may be a reference to Saint Bridget (or “Birgitta“) of Sweden, a fourteenth-century nun and the patron saint of Sweden.",
  },
  {
    hero: "Brigitte",
    description:
      "Like her father, Brigitte has an Ironclad Guild tattoo on her shoulder. Hers is on her outer left shoulder, while Torbjörn's is on his outer right shoulder.",
  },
  {
    hero: "Brigitte",
    description:
      "While her aptitude for engineering mirrored that of her father's (Torbjörn), Brigitte's interest leaned to armor creation while Torbjörn's focus was on weapons.",
  },
];

export { BrigitteFacts };
