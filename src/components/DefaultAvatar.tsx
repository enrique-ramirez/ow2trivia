import avatar from "../assets/ow2-banner.svg";

function DefaultAvatar() {
  return (
    <figure className="relative box-content inline-flex flex-col overflow-hidden rounded-full border-2 border-white bg-white text-gray-900 md:static md:h-[314px] md:w-56 md:items-center md:justify-center md:rounded-none">
      <img src={avatar} alt="generic" className="w-30 object-cover md:w-48" />
    </figure>
  );
}

export { DefaultAvatar };
