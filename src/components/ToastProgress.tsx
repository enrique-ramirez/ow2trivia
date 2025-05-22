import "./ToastProgress.css";

function ToastProgress() {
  return (
    <div className="mt-2 h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
      <div className="toast-progress h-1.5 rounded-full bg-blue-600 dark:bg-blue-500"></div>
    </div>
  );
}

export { ToastProgress };
