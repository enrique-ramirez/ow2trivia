import { Actions } from "./components/Actions";
import { Fact } from "./components/Fact";
import { ToastsContainer } from "./components/ToastsContainer";
import { GithubLink } from "./components/GithubLink";
import { useToast } from "./hooks/useToast";

function App() {
  const { state: toastsState } = useToast();

  return (
    <>
      <GithubLink />
      <main className="m-auto flex max-w-4xl flex-col p-8">
        <Fact />
        <Actions />
      </main>
      <ToastsContainer toasts={toastsState.toasts} />
    </>
  );
}

export default App;
