export default function ChatHeader() {
  return (
    <div className="flex bg-white h-20 px-10 items-center">
      {/* Profil pic */}
      <div className=" rounded-full h-14 w-14 bg-black cursor-pointer"></div>

      {/* container name & status */}

      <div className="ml-4">
        {/* name */}
        <h1 className="mx-4 text-3xl cursor-pointer hover:text-cyan-800">
          John Doe
        </h1>
        {/* connedted status text + green/gray dot */}
        <div className=" relative left-4 h-2 w-2 bg-green-600 rounded-full">
          <h3 className="relative bottom-1 left-3 text-sm">Connected</h3>
        </div>
      </div>
    </div>
  );
}
