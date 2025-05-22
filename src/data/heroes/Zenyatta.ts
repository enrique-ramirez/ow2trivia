import type { HeroesNames } from "../heroes";

type ZenyattaFact = {
  hero: Extract<HeroesNames, "Zenyatta">;
  description: string;
};

const ZenyattaFacts: ZenyattaFact[] = [
  {
    hero: "Zenyatta",
    description:
      "“Zenyatta” is a mash-up of “Zen” (Buddhism) and “Yatta”, a Japanese word meaning “I did it!” or “Hooray!”",
  },
  {
    hero: "Zenyatta",
    description:
      "As hinted by some of his voice lines, Zenyatta's healing and discord orbs are not magic. They are science we are yet to understand that comes from his connection to the Iris. Kiriko, Illari, and the Shimada brothers all use magic.",
  },
  {
    hero: "Zenyatta",
    description:
      "When using Zenyatta's volley, each charge takes and fires 5 ammunition. However, if you have less than 5 balls remaining, he'll still shoot 5 balls upon release.",
  },
  {
    hero: "Zenyatta",
    description:
      "Zenyatta's healing orbs and the chime-like sound they make take insipiration from Baoding balls, also known as Chinese medicine balls.",
  },
  {
    hero: "Zenyatta",
    description:
      "Zenyatta is one of three heroes with no footstep sounds, as he floats instead of walking. THe others are Sigma and Echo.",
  },
  {
    hero: "Zenyatta",
    description:
      "Zenyatta has been seen working for Talon against his will in multiple gameplay trailers, however the cancellation of Story Missions have left the details in shadows.",
  },
];

export { ZenyattaFacts };
