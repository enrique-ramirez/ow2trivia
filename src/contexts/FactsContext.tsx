import { createContext, useReducer } from "react";
import { factsReducer } from "../reducers/factsReducer";
import { Facts } from "../data/facts";
import { getRandomNumber } from "../utils/getRandomNumber";

import type { Actions, State } from "../reducers/factsReducer";
import type { Dispatch } from "react";

const initialState: State = {
  fact: Facts.all[getRandomNumber(Facts.all.length)],
  hero: "all",
  total: Facts.all.length,
};

const FactsContext = createContext<{
  state: State;
  dispatch: Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const FactsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(factsReducer, initialState);

  const value = { state, dispatch };

  return (
    <FactsContext.Provider value={value}>{children}</FactsContext.Provider>
  );
};

export { FactsContext, FactsContextProvider };
