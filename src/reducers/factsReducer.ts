import { Facts } from "../data/facts";
import { getRandomNumber } from "../utils/getRandomNumber";

import type { Fact } from "../data/facts";
import type { HeroesNames } from "../data/heroes";

type State = {
  fact: Fact;
  hero: HeroesNames | "miscelaneous" | "all";
  total: number;
};

type NewFact = {
  type: "NEW_FACT";
};

type NewHero = {
  type: "NEW_HERO";
  payload: HeroesNames | "miscelaneous" | "all";
};

type Actions = NewFact | NewHero;

const factsReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "NEW_FACT": {
      const options = Facts[state.hero];
      const newIndex = getRandomNumber(options.length);

      return {
        ...state,
        fact: options[newIndex],
      };
    }

    case "NEW_HERO": {
      const options = Facts[action.payload];
      const newIndex = getRandomNumber(options.length);

      return {
        ...state,
        hero: action.payload,
        fact: options[newIndex],
        total: options.length,
      };
    }

    default: {
      return state;
    }
  }
};

export { factsReducer };
export type { State, Actions, NewFact, NewHero };
