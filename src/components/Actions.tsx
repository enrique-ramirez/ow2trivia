import { HeroSelector } from "./HeroSelector";
import { useToast } from "../hooks/useToast";
import { useFacts } from "../hooks/useFacts";

function Actions() {
  const { dispatch: toastDispatch } = useToast();
  const { state: factsState, dispatch: factsDispatch } = useFacts();

  const handleNewFact = () => factsDispatch({ type: "NEW_FACT" });
  const handleCopy = () => {
    navigator.clipboard
      .writeText(`Did you know? ${factsState.fact.description}`)
      .then(() => {
        const id = Math.floor(Math.random() * 10000000);
        const title = factsState.fact.hero
          ? `${factsState.fact.hero}'s fun fact`
          : `Fun fact`;
        toastDispatch({
          type: "ADD_TOAST",
          payload: {
            id,
            message: `${title} copied to clipboard!`,
          },
        });
      });
  };

  return (
    <div className="mt-12 mb-8 flex justify-between border-t-2 border-t-blue-900 pt-12">
      <HeroSelector />

      <div>
        <button
          className="bg-blizzardcta cursor-pointer px-8 py-4 text-2xl font-medium text-white uppercase opacity-90 hover:opacity-100"
          onClick={handleNewFact}
        >
          New Fact
        </button>
        {navigator?.clipboard && (
          <button
            className="ml-4 cursor-pointer bg-white px-8 py-4 text-2xl font-medium text-black uppercase opacity-90 hover:opacity-100"
            onClick={handleCopy}
          >
            Copy to clipboard
          </button>
        )}
      </div>
    </div>
  );
}

export { Actions };
