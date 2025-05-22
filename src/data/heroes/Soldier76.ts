import type { HeroesNames } from "../heroes";

type Soldier76Fact = {
  hero: Extract<HeroesNames, "Soldier76">;
  description: string;
};

const Soldier76Facts: Soldier76Fact[] = [
  {
    hero: "Soldier76",
    description:
      "Soldier 76 was the most widely played hero in the game up to October 2023, when Ana took the throne.",
  },
  {
    hero: "Soldier76",
    description:
      "Soldier 76 is gay! His ex-boyfriend is named Vincent, whom he met when he was a member of the US Army.",
  },
  {
    hero: "Soldier76",
    description:
      "In-game, there was a hollywood movie depicting the founding of Overwatch. Soldier 76 considered the film a flop and thought the actor who portrayed was an amateur.",
  },
  {
    hero: "Soldier76",
    description:
      "In his Commando: 76 skin dog tag, it's stated that Soldier 76 is a Catholic. This is the first reference to a real-world religion in Overwatch.",
  },
  {
    hero: "Soldier76",
    description:
      "Soldier 76 is the second LGBT hero in the game, after Tracer.",
  },
  {
    hero: "Soldier76",
    description: "Soldier 76's favourite animal is the Jack Russel Terrier!",
  },
  {
    hero: "Soldier76",
    description: "Soldier 76 takes vitamins once a day, after a steak dinner.",
  },
];

export { Soldier76Facts };
