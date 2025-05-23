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
    <figure className="relative inline-flex shrink-0 flex-col border-2 border-white bg-white text-gray-900">
      <img
        src={srcAvatar}
        alt={heroName}
        className="h-64 w-56 bg-[url('/src/assets/bg-card.jpg')] object-cover"
      />

      <figcaption className="flex justify-center py-4 align-middle font-medium uppercase">
        <span className="mr-2 rounded-full border-1 border-gray-900 p-1">
          <img src={srcRole} alt={role} className="h-4 w-4" />
        </span>
        {heroName}
      </figcaption>
    </figure>
  );
}

export { Hero };
