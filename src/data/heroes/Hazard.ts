import type { HeroesNames } from "../heroes";

type HazardFact = {
  hero: Extract<HeroesNames, "Hazard">;
  description: string;
};

const HazardFacts: HazardFact[] = [
  {
    hero: "Hazard",
    description:
      "Hazard's ultimate penetrates all walls and ceilings, but NOT shields. It can also bring down a flying enemy!",
  },
  {
    hero: "Hazard",
    description:
      "Hazard's favourite animal is the unicorn. This may be a reference to his Scottish origins, as the unicorn is Scottland's national animal",
  },
  {
    hero: "Hazard",
    description:
      "Hazard used to idolize Sojourn, though lost his admiration after she rejoined Overwatch",
  },
  {
    hero: "Hazard",
    description:
      "Hazard doesn't get along with most of the other heroes due to their allegiances (Overwatch, Talon, Junkers). Ashe and Kiriko are two people he actually likes.",
  },
];

export { HazardFacts };
