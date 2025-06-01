import type { HeroesNames } from "../heroes";

type TracerFact = {
  hero: Extract<HeroesNames, "Tracer">;
  description: string;
};

const TracerFacts: TracerFact[] = [
  {
    hero: "Tracer",
    description:
      "In her teens, Tracer was something of a party animal; staying out all night, and attending rock concerts.",
  },
  {
    hero: "Tracer",
    description:
      "Tracer's “Sporty Tracer“ and “Posh Tracer“ skins are reference to Sporty Spice and Posh Spice from the Spice Girls.",
  },
  {
    hero: "Tracer",
    description:
      "Tracer was the very first hero created for Overwatch, heavily influenced by another character from an unreleased title named 'Titan'.",
  },
  {
    hero: "Tracer",
    description:
      "Tracer was the first LGBT character introduced in the game! Specifically, she's a lesbian.",
  },
  {
    hero: "Tracer",
    description: "Tracer appears in the 2018 film “Ready Player One“.",
  },
  {
    hero: "Tracer",
    description: "Tracer's favourite football team is Chelsea.",
  },
  {
    hero: "Tracer",
    description:
      "Tracer's favourite animal is the falcon, though other candidates include the cheetah, lion and gorilla.",
  },
  {
    hero: "Tracer",
    description:
      "Winston is Tracer's best friend. She used to send Winston bananas.",
  },
  {
    hero: "Tracer",
    description: "Tracer dislikes horror movies.",
  },
  {
    hero: "Tracer",
    description:
      "Only 8 heroes melee exclusively with their right hand: Tracer, Illari, Kiriko, Mercy, Freja, Sombra, Hanzo and Reaper.",
  },
  {
    hero: "Tracer",
    description:
      "Tracer has trouble concentrating, only being able to actually do it for hours at a time when she's upset.",
  },
  {
    hero: "Tracer",
    description:
      "Tracer is a fan of British pop/punk music, such as The Clash and The Beatles, and collects vinyl records.",
  },
  {
    hero: "Tracer",
    description:
      "Tracer got her time-travelling powers from an accident at a test for an overwatch teleporting fighter named ”Slipstream”.",
  },
  {
    hero: "Tracer",
    description:
      "Tracer's ”chronal accelerator”, which controls her otherwise uncontrollable time-jumps, was developed by Winston.",
  },
];

export { TracerFacts };
