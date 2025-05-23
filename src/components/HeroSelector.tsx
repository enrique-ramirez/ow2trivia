import { Heroes } from "../data/heroes";
import { useFacts } from "../hooks/useFacts";

import type { HeroesNames } from "../data/heroes";

function HeroSelector() {
  const { dispatch: factsDispatch } = useFacts();
  const names = Object.keys(Heroes);

  const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    factsDispatch({ type: "NEW_HERO", payload: target.value as HeroesNames });
  };

  return (
    <form className="">
      <select
        id="countries"
        className="block w-57 rounded-lg border border-gray-300 bg-gray-50 p-4.5 font-medium text-gray-900 uppercase focus:border-blue-500 focus:ring-blue-500"
        onChange={handleChange}
        defaultValue="all"
      >
        <option value="all">All</option>
        <option value="miscelaneous">Miscelaneous</option>
        {names.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </form>
  );
}

export { HeroSelector };
