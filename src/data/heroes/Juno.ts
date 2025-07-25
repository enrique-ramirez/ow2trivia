import type { HeroesNames } from "../heroes";

type JunoFact = {
  hero: Extract<HeroesNames, "Juno">;
  description: string;
};

const JunoFacts: JunoFact[] = [
  {
    hero: "Juno",
    description:
      "Juno is the first hero whose healing has a falloff range, meaning it becomes less efective at a distance.",
  },
  {
    hero: "Juno",
    description:
      "Juno's Orbital Ray ultimate comes from her ship still in orbit.",
  },
  {
    hero: "Juno",
    description:
      "Juno's gun displays an angry face when aiming at enemies and a happy face when aiming at teammates.",
  },
  {
    hero: "Juno",
    description:
      "Juno sometimes refers to Mei as “Auntie Mei“ out of respect as is customary in Asia when referring to middle-aged or elderly women, not because they're related.",
  },
  {
    hero: "Juno",
    description:
      "Being a martian with not many earthling's experiences, Juno dreams of seeing a horse.",
  },
  {
    hero: "Juno",
    description:
      "Prior to landing on Earth, Juno didn't know what a school bus was.",
  },
  {
    hero: "Juno",
    description: "Juno never uses contractions.",
  },
  {
    hero: "Juno",
    description:
      "Juno is one of two heroes whose melee attack is a kick rather than a punch, the other being Zenyatta.",
  },
  {
    hero: "Juno",
    description:
      "Juno can climb up over most curved surfaces (Curved as in a pillar, not a ledge) with her shift!",
  },
];

export { JunoFacts };
