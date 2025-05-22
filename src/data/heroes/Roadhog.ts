import type { HeroesNames } from "../heroes";

type RoadhogFact = {
  hero: Extract<HeroesNames, "Roadhog">;
  description: string;
};

const RoadhogFacts: RoadhogFact[] = [
  {
    hero: "Roadhog",
    description:
      "Roadhog is heavily implied to have New Zealander roots. His name “Mako” is Maori for “shark” and his Toa/Islander skins are obvious Maori references. He also says “wop wops” which is New Zealander slang.",
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
];

export { RoadhogFacts };
