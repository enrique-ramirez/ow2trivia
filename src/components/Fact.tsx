import { DefaultAvatar } from "./DefaultAvatar";
import { Hero } from "./Hero";
import { useFacts } from "../hooks/useFacts";

function Fact() {
  const { state: factsState } = useFacts();

  return (
    <section className="relative flex items-center pt-32 text-left text-white md:pt-0">
      <div className="absolute top-0 left-1/2 shrink-0 -translate-x-1/2 transform md:static md:left-auto md:-translate-x-0">
        {factsState.fact.hero ? (
          <Hero name={factsState.fact.hero} />
        ) : (
          <DefaultAvatar />
        )}
      </div>

      <div className="w-full text-center text-2xl md:ml-4 md:p-4 md:text-left">
        <h1 className="mb-8 text-4xl font-bold">Did you know?</h1>
        <p>{factsState.fact.description}</p>
      </div>
    </section>
  );
}

export { Fact };
