import type { HeroesNames } from "../heroes";

type IllariFact = {
  hero: Extract<HeroesNames, "Illari">;
  description: string;
};

const IllariFacts: IllariFact[] = [
  {
    hero: "Illari",
    description:
      "Illari is the third trilingual hero (after BAptiste and Kiriko), speaking English, Spanish and Quechua.",
  },
  {
    hero: "Illari",
    description:
      "Illari has a voice line “No mistakes, no mercy“ which she only speaks if Mercy is not on your team",
  },
  {
    hero: "Illari",
    description: "Illari is currently the youngest human hero in the game",
  },
  {
    hero: "Illari",
    description:
      "Illari is a Quechuan female name which translates as “sunrise“.",
  },
  {
    hero: "Illari",
    description:
      "Illari's ultimate voiceline “Inti Iluqsimun“ translates to “The sun rises“",
  },
  {
    hero: "Illari",
    description: "Illari has a pet llama named Chuño",
  },
];

export { IllariFacts };
