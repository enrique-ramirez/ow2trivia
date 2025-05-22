import { Toast } from "./Toast";
import type { Toast as ToastType } from "../reducers/toastReducer";

function ToastsContainer({ toasts }: { toasts: ToastType[] }) {
  return (
    <div className="fixed top-4 right-4">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}

export { ToastsContainer };
