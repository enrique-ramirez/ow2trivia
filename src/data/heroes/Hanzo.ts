import type { HeroesNames } from "../heroes";

type HanzoFact = {
  hero: Extract<HeroesNames, "Hanzo">;
  description: string;
};

const HanzoFacts: HanzoFact[] = [
  {
    hero: "Hanzo",
    description:
      "Hanzo and Genji were the first playable heroes in Overwatch to be related",
  },
  {
    hero: "Hanzo",
    description:
      "Hanzo can gain ultimate charge while Dragonstrike is active, but the damage dealt by it does not generate any charge.",
  },
  {
    hero: "Hanzo",
    description: "Hanzo's ultimate Dragonstrike can be deflected by Genji!",
  },
  {
    hero: "Hanzo",
    description:
      "Hanzo is one of few heroes who doesn't often speak in their native language. He only does this during his ultimate ability.",
  },
  {
    hero: "Hanzo",
    description:
      "The Hanzo National Church was founded in Brazil by mateus Mognon to demonstrate the ease of founding a religion in the country.",
  },
  {
    hero: "Hanzo",
    description:
      "Hanzo's voice line “Shot through the heart and I'm to blame“ is a reference to Bon Jovi's song “You give love a bad name“",
  },
  {
    hero: "Hanzo",
    description:
      "Hanzo has delicate ankles, leading him to wear mechanical greaves",
  },
  {
    hero: "Hanzo",
    description:
      "Only 8 heroes melee exclusively with their right hand: Hanzo, Reaper, Tracer, Illari, Kiriko, Mercy, Freja and Sombra.",
  },
];

export { HanzoFacts };
