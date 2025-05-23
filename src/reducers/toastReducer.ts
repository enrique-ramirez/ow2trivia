type Toast = {
  id: number;
  message: string;
};

type State = {
  toasts: Toast[];
};

type AddToast = {
  type: "ADD_TOAST";
  payload: Toast;
};

type DeleteToast = {
  type: "DELETE_TOAST";
  payload: number;
};
type Actions = AddToast | DeleteToast;

const toastReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "ADD_TOAST": {
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    }

    case "DELETE_TOAST": {
      const updatedToasts = state.toasts.filter(
        (toast) => toast.id !== action.payload,
      );
      return {
        ...state,
        toasts: updatedToasts,
      };
    }

    default: {
      return state;
    }
  }
};

export { toastReducer };
export type { State, Actions, Toast, AddToast, DeleteToast };
