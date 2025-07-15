import type { HeroesNames } from "../heroes";

type JunkratFact = {
  hero: Extract<HeroesNames, "Junkrat">;
  description: string;
};

const JunkratFacts: JunkratFact[] = [
  {
    hero: "Junkrat",
    description:
      "When doing Junkrat's sipping emote, he sips the Overwatch's theme out of his drink!",
  },
  {
    hero: "Junkrat",
    description:
      "Junkrat is 6'5\" tall and weighs 155lbs. He appears shorter due to normally being hunched over.",
  },
  {
    hero: "Junkrat",
    description: "Junkrat eats his own toenails.",
  },
  {
    hero: "Junkrat",
    description:
      "Junkrat keeps Milk Tea with Boba half sweetened in his canteen.",
  },
  {
    hero: "Junkrat",
    description:
      "Junkrat is a big fan of Wrecking Ball and was inspired to build his Rip-tire by watching him compete in the Scrapyard.",
  },
  {
    hero: "Junkrat",
    description:
      "Junkrat blew off his own right leg. How he lost his right arm is still unknown. He's also missing his index finger on his left hand.",
  },
  {
    hero: "Junkrat",
    description:
      "Junkrat went through numerous designs, beginning with a set of early concepts depicting him as a bulky robot, a cyborg, a mutant, and even an alien.",
  },
  {
    hero: "Junkrat",
    description:
      "You can place a Junkrat's trap on top of anyone sleeping, stunned or even a Mei in ice form. The trap will trap them immediatelly after they get up!",
  },
];

export { JunkratFacts };
