import type { HeroesNames } from "../heroes";

type TracerFact = {
  hero: Extract<HeroesNames, "Tracer">;
  description: string;
};

const TracerFacts: TracerFact[] = [
  {
    hero: "Tracer",
    description:
      "Tracer was a bit of a revel when she was a teenager, getting her first motorcycle at 17 years old.",
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
];

export { TracerFacts };
