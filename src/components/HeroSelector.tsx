import { Heroes } from "../data/heroes";
import { Facts } from "../data/facts";
import { useFacts } from "../hooks/useFacts";

import type { HeroesNames } from "../data/heroes";

function HeroSelector() {
  const { dispatch: factsDispatch } = useFacts();
  const names = Object.keys(Heroes);

  const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    factsDispatch({ type: "NEW_HERO", payload: target.value as HeroesNames });
  };

  return (
    <form>
      <select
        id="countries"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-57"
        onChange={handleChange}
        defaultValue="all"
      >
        <option value="all">All ({Facts.all.length})</option>
        <option value="miscelaneous">
          Miscelaneous ({Facts.miscelaneous.length})
        </option>
        {names.map((name) => (
          <option key={name} value={name}>
            {Heroes[name as HeroesNames].name} (
            {Facts[name as HeroesNames].length})
          </option>
        ))}
      </select>
    </form>
  );
}

export { HeroSelector };
