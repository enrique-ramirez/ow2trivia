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
    <div className="mt-10 mb-4 justify-between border-t-2 border-t-blue-900 pt-8 md:mt-12 md:mb-8 md:flex md:pt-12">
      <HeroSelector />

      <div className="mt-4 flex flex-row md:mt-0 md:block">
        <button
          className="bg-blizzardcta mr-4 w-full cursor-pointer py-4 text-lg font-medium text-white uppercase opacity-90 hover:opacity-100 md:mr-0 md:mb-0 md:w-auto md:px-8 md:text-2xl"
          onClick={handleNewFact}
          id="btn--new-fact"
        >
          New Fact
        </button>
        {navigator?.clipboard && (
          <button
            className="w-full cursor-pointer bg-white py-4 text-lg font-medium text-black uppercase opacity-90 hover:opacity-100 md:ml-4 md:w-auto md:px-8 md:text-2xl"
            onClick={handleCopy}
            id="btn--copy-text"
          >
            Copy <span className="hidden lg:inline">to clipboard</span>
          </button>
        )}
      </div>
    </div>
  );
}

export { Actions };
