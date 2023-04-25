import Image from "next/image";
export default function ChatHeader() {
  return (
    <div className="flex bg-white h-20 px-10 items-center">
      {/* Profil pic */}
      <Image
        className="rounded-full h-14 w-14 cursor-pointer"
        src="/bojack.webp"
        alt="Bruce"
        width={50}
        height={50}
      />
      {/* container name & status */}

      <div className="ml-4">
        {/* name */}
        <h1 className="text-3xl cursor-pointer hover:text-cyan-800">Bojack</h1>
        {/* connedted status text + green/gray dot */}
        <div className="flex items-center">
          <div className="mr-1 h-2 w-2 bg-green-600 rounded-full"></div>
          <h3 className="text-sm">Connected</h3>
        </div>
      </div>
    </div>
  );
}
