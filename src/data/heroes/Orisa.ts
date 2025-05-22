import type { HeroesNames } from "../heroes";

type OrisaFact = {
  hero: Extract<HeroesNames, "Orisa">;
  description: string;
};

const OrisaFacts: OrisaFact[] = [
  {
    hero: "Orisa",
    description:
      "Orisa and Reinhardt are the tallest heroes in the roster at 7'4\".",
  },
  {
    hero: "Orisa",
    description:
      "Being only one month old, Orisa is the youngest hero in Overwatch.",
  },
  {
    hero: "Orisa",
    description: "Orisa's favourite animal are puppies!",
  },
  {
    hero: "Orisa",
    description:
      "Orisa dislikes Junkers due to their anti-omnic sentiments/activities.",
  },
  {
    hero: "Orisa",
    description: "Sojourn was the one to give Orisa her Fusion Driver weapon.",
  },
  {
    hero: "Orisa",
    description:
      "Orisa is named after the Orisha; spirits reflecting one of the manifestations of the Supreme Divinity in Yoruba religion.",
  },
  {
    hero: "Orisa",
    description:
      "Orisa's voice is a synthesis of the voices of Efi (her creator)'s grandmother, mother, teacher and Gabrielle Adawe.",
  },
];

export { OrisaFacts };
