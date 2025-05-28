import type { HeroesNames } from "../heroes";

type WreckingBallFact = {
  hero: Extract<HeroesNames, "WreckingBall">;
  description: string;
};

const WreckingBallFacts: WreckingBallFact[] = [
  {
    hero: "WreckingBall",
    description:
      "Wrecking Ball is the only hero in the entire OW2 roster who can't crouch (Mech D.Va can't crouch, but baby D.Va can!)",
  },
  {
    hero: "WreckingBall",
    description:
      "In the 'Dorado' map as Wrecking Ball, if you the bells in a specific order (from the garden, left to right: 2, 1, 2, 3, 1, 3, 4; four being the bell on the right hall) Hammond will sing!",
  },
  {
    hero: "WreckingBall",
    description:
      "The number 8 is painted on the Wrecking Ball chassis, referencing Hammond's official designation: Specimen 8.",
  },
  {
    hero: "WreckingBall",
    description:
      "Wrecking Ball is “Pikachu-sized.“ In the Pokémon universe, Pikachus are 0.4 m/40 cm (1'04\") high and weighs 6 kg (13.2 lbs).",
  },
  {
    hero: "WreckingBall",
    description:
      "Wrecking Ball is the only hero capable of equipping all 4 type of heal available in-game (health, armor, shield, overhealth).",
  },
  {
    hero: "WreckingBall",
    description:
      "“Wrecking Ball“ is the name that he chose for himself as a competitor in the Scrapyard. The name given to him by the scientists on the Lunar Horizon Colony is Hammond.",
  },
  {
    hero: "WreckingBall",
    description:
      "Winston is the only character that can understand Wrecking Ball, given that they are both animals and all animals can communicate with one another.",
  },
  {
    hero: "WreckingBall",
    description: "Wrecking Ball enjoys sunflower seeds and pancakes.",
  },
];

export { WreckingBallFacts };
