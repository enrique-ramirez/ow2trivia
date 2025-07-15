import type { HeroesNames } from "../heroes";

type ReinhardtFact = {
  hero: Extract<HeroesNames, "Reinhardt">;
  description: string;
};

const ReinhardtFacts: ReinhardtFact[] = [
  {
    hero: "Reinhardt",
    description:
      "Reinhardt was given the honor of being godfather and naming Brigitte, after Reinhardt saved Torbjörn's life. Reinhardt also taught Brigitte how to fight.",
  },
  {
    hero: "Reinhardt",
    description:
      "Reinhardt's Shatter can actually headshot an enemy if delivered right on top of them!",
  },
  {
    hero: "Reinhardt",
    description:
      "Reinhardt's voice actor (Darinn De Paul) is the same as Apex Legends' Revenant!",
  },
  {
    hero: "Reinhardt",
    description:
      "Reinhardt and Orisa are the tallest heroes in the roster at 7'4\".",
  },
  {
    hero: "Reinhardt",
    description:
      "Reinhardt is one of only two heroes to not have a 'Quick Melee' attack, as his basic attacks are melee attacks. The other being Brigitte.",
  },
  {
    hero: "Reinhardt",
    description:
      "Reinhardt is currently the second oldest character in the hero line-up, with the oldest being Sigma, who is one year older.",
  },
  {
    hero: "Reinhardt",
    description: "Reinhardt is Brigitte's godfather!",
  },
  {
    hero: "Reinhardt",
    description: "Reinhardt can pin a DVA bomb away (or towards) his team!",
  },
  {
    hero: "Reinhardt",
    description:
      "Reinhardt's shatter can free him from Zarya's grav, if you are far enough away from the grav that it can't immediately pull you back in!",
  },
];

export { ReinhardtFacts };
