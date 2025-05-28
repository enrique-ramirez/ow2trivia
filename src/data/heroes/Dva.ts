import type { HeroesNames } from "../heroes";

type DvaFact = {
  hero: Extract<HeroesNames, "Dva">;
  description: string;
};

const DvaFacts: DvaFact[] = [
  {
    hero: "Dva",
    description:
      "D.Va was a professional StarCraft player in the Overwatch universe before becoming a mech pilot for the Mobile Exo-Force of the Korean Army (MEKA).",
  },
  {
    hero: "Dva",
    description:
      "D.Va's ultimate canonically works by ejecting D.Va and her firing her light pistol on the exposed reactor, overloading it.",
  },
  {
    hero: "Dva",
    description: "D.Va's mech is named Tokki, which is korean for 'rabbit'.",
  },
  {
    hero: "Dva",
    description:
      "D.Va is a fan of Lúcio's music, while Lúcio is a fan of D.Va's pro-gaming achievements!",
  },
  {
    hero: "Dva",
    description:
      "Until the arival of Orisa, who is 1 month old; D.Va was the youngest hero in the Overwatch roster.",
  },
  {
    hero: "Dva",
    description:
      "D.Va's Defense Matrix is not automatic! She manually shoots down incoming projectiles using her impressive 84,480 APM (actions per minute)!",
  },
  {
    hero: "Dva",
    description:
      "In the Korean version of Overwatch, D.Va's name is the only name not in Hangul, as K-pop stars often romanize their names.",
  },
  {
    hero: "Dva",
    description: "D.Va's given name “Hana“ is the same as the Korean number 1.",
  },
  {
    hero: "Dva",
    description:
      "D.Va's warning icon color will change depending on your range. Red indicates you're in range, orange means you're out of range.",
  },
];

export { DvaFacts };
