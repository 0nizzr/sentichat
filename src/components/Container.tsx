import MainChat from "./MainChat";
import Sidebar from "./Sidebar";

export default function Container() {
  return (
    <div className="flex h-5/6 w-2/3 bg-orange-400  ">
      <Sidebar />
      <MainChat />
    </div>
  );
}
