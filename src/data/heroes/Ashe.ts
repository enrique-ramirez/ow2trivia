import type { HeroesNames } from "../heroes";

type AsheFact = {
  hero: Extract<HeroesNames, "Ashe">;
  description: string;
};

const AsheFacts: AsheFact[] = [
  {
    hero: "Ashe",
    description:
      "If you wave at your B.O.B. as Ashe he waves back at you! If you wave at an enemy B.O.B. he won't.",
  },
  {
    hero: "Ashe",
    description:
      "Ashe appears to have a special connection with roses, as she has a rose shown on every skin.",
  },
  {
    hero: "Ashe",
    description:
      "Ashe detests being called by her forename (Elizabeth), and insists on being called by her surname.",
  },
  {
    hero: "Ashe",
    description:
      "Ashe has a nickname, 'Calamity', which is possibly a reference to famed American frontiers-woman Calamity Jane.",
  },
  {
    hero: "Ashe",
    description:
      "Initially, Ashe wasn't intended to be a playable hero, but rather one of the enemies for McCree (now Cassidy) to battle.",
  },
  {
    hero: "Ashe",
    description:
      "Ashe's Ultimate B.O.B. was very technically challenging to implement due to memory and performance restrictions, and almost resulted in Ashe being scrapped.",
  },
  {
    hero: "Ashe",
    description:
      "B.O.B. can be healed, buffed and debuffed; and can also capture or contest objectives. He's basically an extra party member.",
  },
];

export { AsheFacts };
