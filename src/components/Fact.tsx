import { DefaultAvatar } from "./DefaultAvatar";
import { Hero } from "./Hero";
import { useFacts } from "../hooks/useFacts";

function Fact() {
  const { state: factsState } = useFacts();

  return (
    <section className="flex items-center text-left text-white">
      {factsState.fact.hero ? (
        <Hero name={factsState.fact.hero} />
      ) : (
        <DefaultAvatar />
      )}

      <div className="ml-4 p-4 text-2xl">
        <h1 className="mb-8 text-4xl font-bold">Did you know?</h1>
        <p>{factsState.fact.description}</p>
      </div>
    </section>
  );
}

export { Fact };
