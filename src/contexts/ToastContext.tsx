import { createContext, useReducer } from "react";
import { toastReducer } from "../reducers/toastReducer";

import type { Actions, State } from "../reducers/toastReducer";
import type { Dispatch } from "react";

const initialState: State = {
  toasts: [],
};

const ToastContext = createContext<{
  state: State;
  dispatch: Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const ToastContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  const value = { state, dispatch };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export { ToastContext, ToastContextProvider };
