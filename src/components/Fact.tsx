import { useState } from "react";

import { DefaultAvatar } from "./DefaultAvatar";
import { Hero } from "./Hero";

import { Facts } from "../data/facts";
import { getRandomNumber } from "../utils/getRandomNumber";
import { useToast } from "../hooks/useToast";

function Fact() {
  const totalFacts = Facts.length;
  const [current, setCurrent] = useState(getRandomNumber(totalFacts));
  const { dispatch } = useToast();
  console.log("Total Facts:", totalFacts);

  const fact = Facts[current];
  const handleNewFact = () => setCurrent(getRandomNumber(totalFacts));
  const handleCopy = () => {
    navigator.clipboard
      .writeText(`Did you know? ${fact.description}`)
      .then(() => {
        const id = Math.floor(Math.random() * 10000000);
        const title = fact.hero ? `${fact.hero}'s fun fact` : `Fun fact`;
        dispatch({
          type: "ADD_TOAST",
          payload: {
            id,
            message: `${title} copied to clipboard!`,
          },
        });
      });
  };

  return (
    <section className="flex items-center p-8 text-left text-white">
      {fact.hero ? <Hero name={fact.hero} /> : <DefaultAvatar />}
      <div className="ml-4 p-4 text-2xl">
        <h1 className="mb-8 text-4xl font-bold">Did you know?</h1>
        <p>{fact.description}</p>
        <div className="mt-8">
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
    </section>
  );
}

export { Fact };
