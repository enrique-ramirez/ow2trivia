import type { HeroesNames } from "../heroes";

type MaugaFact = {
  hero: Extract<HeroesNames, "Mauga">;
  description: string;
};

const MaugaFacts: MaugaFact[] = [
  {
    hero: "Mauga",
    description:
      "As of May 2025, Mauga is the least played hero in the Overwatch series.",
  },
  {
    hero: "Mauga",
    description: "Mauga's stomp can headshot an enemy if you land it right!",
  },
  {
    hero: "Mauga",
    description:
      "Mauga has two hearts! He got an extra cybernetic heart after a fatal injury from an explosion. He later decided to replace his biological heart with a second cybernetic one.",
  },
  {
    hero: "Mauga",
    description: "Mauga is a Samoan name meaning “mountain“.",
  },
  {
    hero: "Mauga",
    description:
      "Based on interactions with Junkrat, Mauga may have been an underwear model at some point.",
  },
  {
    hero: "Mauga",
    description:
      "Mauga is a fan of Zarya, per their shared experience in weightlifting.",
  },
  {
    hero: "Mauga",
    description:
      "Mauga's ult chains enemies and puts a shield around him. If he were to jump from an edge, he'd pull enemies down with him!",
  },
];

export { MaugaFacts };
