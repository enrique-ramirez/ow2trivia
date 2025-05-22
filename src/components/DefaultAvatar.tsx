import avatar from "../assets/ow2-banner.svg";

function DefaultAvatar() {
  return (
    <figure className="relative box-content inline-flex h-[314px] w-56 shrink-0 items-center justify-center border-2 border-white bg-white text-gray-900">
      <img src={avatar} alt="generic" className="w-48 object-cover" />
    </figure>
  );
}

export { DefaultAvatar };
