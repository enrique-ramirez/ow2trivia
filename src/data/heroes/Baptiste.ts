import type { HeroesNames } from "../heroes";

type BaptisteFact = {
  hero: Extract<HeroesNames, "Baptiste">;
  description: string;
};

const BaptisteFacts: BaptisteFact[] = [
  {
    hero: "Baptiste",
    description:
      "Baptiste is bisexual, as was confirmed in the Overwatch comic 'As you are'. He was in love with Pharah, which ended when she came out as a lesbian. There's rumors he and Mauga used to be an item.",
  },
  {
    hero: "Baptiste",
    description:
      "Baptiste is the only hero in the game who has different ammo for his weapon's two modes of fire.",
  },
  {
    hero: "Baptiste",
    description:
      "Baptiste's medic armor bears similarities to that of medic armor in StarCraft, most specifically the Tiger's Claw variant.",
  },
  {
    hero: "Baptiste",
    description:
      "Baptiste appears to be attracted to Cassidy, as he refers to him as the 'second most handsome man on the [Overwatch] team.'",
  },
  {
    hero: "Baptiste",
    description:
      "Baptiste's achievement 'Window of Opportunity' is the rarest achievement, with around 0.3% of players ever getting it.",
  },
];

export { BaptisteFacts };
