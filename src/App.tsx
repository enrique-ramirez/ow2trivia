import { Fact } from "./components/Fact";
import { ToastsContainer } from "./components/ToastsContainer";
import { useToast } from "./hooks/useToast";

function App() {
  const { state: toastsState } = useToast();

  return (
    <>
      <main className="m-auto max-w-4xl text-center">
        <Fact />
      </main>
      <ToastsContainer toasts={toastsState.toasts} />
    </>
  );
}

export default App;
