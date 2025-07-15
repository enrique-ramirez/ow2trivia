import type { HeroesNames } from "../heroes";

type GenjiFact = {
  hero: Extract<HeroesNames, "Genji">;
  description: string;
};

const GenjiFacts: GenjiFact[] = [
  {
    hero: "Genji",
    description:
      "At Blizzcon 2017, Michael Chu confirmed that, although Genji was missing a bunch of his original body (replaced by cybernetic parts), he still owned a normal, human p3N!s.",
  },
  {
    hero: "Genji",
    description:
      "Contrary to popular belief, you cannot melee through Genji's deflect.",
  },
  {
    hero: "Genji",
    description:
      "The Japanese word “bushin“ (meaning “wargod“) is written on Genji's chest, likely an homage to the Final Fight character “Guy“.",
  },
  {
    hero: "Genji",
    description:
      "Genji uses his own armor polish. Walnuts are part of the ingredients.",
  },
  {
    hero: "Genji",
    description: "Genji's favourite animal is Triceratops!",
  },
  {
    hero: "Genji",
    description:
      "Genji and Hanzo were originally envisioned as a single cyborg ninja hero named Hanzo who wielded both a bow and a sword.",
  },
  {
    hero: "Genji",
    description:
      "Genji's Dragon Blade ability was originally his primary attack, but this didn't work well, so it became his ultimate.",
  },
  {
    hero: "Genji",
    description: "Genji can deflect (and kill with) Bastion's ult!",
  },
];

export { GenjiFacts };
