import Image from "next/image";
export default function SideBarFriend() {
  return (
    <div className="flex items-center h-20 border-b">
      {/* Profil pic */}
      <div className=""></div>
      <Image
        className="rounded-full h-14 w-14 cursor-pointer mx-5"
        src="/bruce.png"
        alt="Bruce"
        width={50}
        height={50}
      />
      <div>
        {/* name */}
        <h1 className="text-xl cursor-pointer hover:text-cyan-800">
          Bruce Wayne
        </h1>
        {/* message */}
        <p className="text-[0.85rem] text-gray-600">
          yo borrowed the batmobile brb
        </p>
      </div>
    </div>
  );
}
