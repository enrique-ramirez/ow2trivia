import type { HeroesNames } from "../heroes";

type RoadhogFact = {
  hero: Extract<HeroesNames, "Roadhog">;
  description: string;
};

const RoadhogFacts: RoadhogFact[] = [
  {
    hero: "Roadhog",
    description:
      "Roadhog is likely from New Zealand. “Mako” is Māori for “shark,” he uses NZ slang like “wop wops,” and his skins feature Māori influences.",
  },
  {
    hero: "Roadhog",
    description:
      "Roadhog is the only hero whose face is never shown in any of his skins.",
  },
  {
    hero: "Roadhog",
    description:
      "When landing after a jump, there is a rare chance that Roadhog will fart. This appears to be an easter egg.",
  },
  {
    hero: "Roadhog",
    description: "Roadhog's favourite animal is Pachimari!",
  },
  {
    hero: "Roadhog",
    description:
      "When grabbing enemies with the Chain Hook, Roadhog might yell: “Get over here!“ or “Come here!“; a possible reference to Scorpion from Mortal Kombat.",
  },
  {
    hero: "Roadhog",
    description:
      "Roadhog's name, Mako, means “Shark“ in the New Zealand Maori dialect.",
  },
  {
    hero: "Roadhog",
    description: "Roadhog can hook a JunkRat tire!",
  },
  {
    hero: "Roadhog",
    description: "Roadhog can hook someone out of Mauga's cage!",
  },
  {
    hero: "Roadhog",
    description: "Roadhog can hook a DVA bomb! ... don't do it, though!",
  },
  {
    hero: "Roadhog",
    description:
      "When Roadhog uses his healing ability, he also gets daage reduction! It can be useful to survive even under anti!",
  },
];

export { RoadhogFacts };
