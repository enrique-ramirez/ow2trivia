import avatar from "../assets/ow2-banner.svg";

function DefaultAvatar() {
  return (
    <figure className="relative inline-flex flex-col overflow-hidden rounded-full border-2 border-white bg-white text-gray-900 md:static md:rounded-none">
      <img src={avatar} alt="generic" className="w-30 object-cover md:w-48" />
    </figure>
  );
}

export { DefaultAvatar };
