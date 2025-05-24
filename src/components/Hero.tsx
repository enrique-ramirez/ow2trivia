import { Heroes } from "../data/heroes";
import { useHeroImg } from "../hooks/useHeroImg";

import type { HeroesNames } from "../data/heroes";

type HeroProps = {
  name: HeroesNames;
};

function Hero({ name }: HeroProps) {
  const { name: heroName, id, role } = Heroes[name];
  const { src: srcAvatar } = useHeroImg(id, "Avatar");
  const { src: srcRole } = useHeroImg(role, "Role");

  return (
    <figure className="relative inline-flex flex-col overflow-hidden rounded-full border-2 border-white bg-white text-gray-900 md:static md:rounded-none">
      <img
        src={srcAvatar}
        alt={heroName}
        className="h-30 w-30 bg-[url('/src/assets/bg-card.jpg')] object-cover md:h-64 md:w-56"
      />

      <figcaption className="hidden justify-center py-4 align-middle font-medium uppercase md:block md:flex">
        <span className="mr-2 rounded-full border-1 border-gray-900 p-1">
          <img src={srcRole} alt={role} className="h-4 w-4" />
        </span>
        {heroName}
      </figcaption>
    </figure>
  );
}

export { Hero };
