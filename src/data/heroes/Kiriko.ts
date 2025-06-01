import type { HeroesNames } from "../heroes";

type KirikoFact = {
  hero: Extract<HeroesNames, "Kiriko">;
  description: string;
};

const KirikoFacts: KirikoFact[] = [
  {
    hero: "Kiriko",
    description:
      "As Kiriko, you can shoot 2 times between heals! You don't have to perfectly time it. If you keep both mouse buttons pressed, you'll throw them automatically.",
  },
  {
    hero: "Kiriko",
    description:
      "As Kiriko, you can keep your “Swift Step“ key pressed while moving around and, as soon as a teammate is in range, you'll teleport. Useful when cornered by the enemy!",
  },
  {
    hero: "Kiriko",
    description:
      "Kiri means “mist“ and ko is a common female name suffix that means “child“. Hence, Kiriko could be roughly translated as Mist Child.",
  },
  {
    hero: "Kiriko",
    description:
      "Kiriko's relationship with the Fox Spirit mimics that of Genji and Hanzo with the Shimada dragons.",
  },
  {
    hero: "Kiriko",
    description:
      "Kiriko is the second hero in the Overwatch franchise to be trilingual, speaking English, Japanese and Japanese Sign Language.",
  },
  {
    hero: "Kiriko",
    description:
      "Kiriko's fox plush from the animated short “Kiriko“ is present in the majority of the arcade machines in Hanaoka.",
  },
  {
    hero: "Kiriko",
    description:
      "Kiriko's age is often the source of debate as there are conflicting stories told of her upbringing with the Shimada family.",
  },
  {
    hero: "Kiriko",
    description:
      "While Kiriko's kunai are ninja tools, her other abilities mainly stem from objects associated with Shintoism (her ofuda, suzu, kitsune and torii).",
  },
  {
    hero: "Kiriko",
    description:
      "The symbol on Kiriko's headband is the kanji “kitsune“ (meaning “fox“), which has been stylized and rotated 45° counter-clockwise.",
  },
  {
    hero: "Kiriko",
    description:
      "Kiriko's design was heavily inspired by Genji. One of her starting points was creating a support hero that DPS players would enjoy playing.",
  },
  {
    hero: "Kiriko",
    description:
      "Only 8 heroes melee exclusively with their right hand: Kiriko, Mercy, Freja, Sombra, Hanzo, Reaper, Tracer and Illari.",
  },
];

export { KirikoFacts };
