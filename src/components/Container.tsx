import Chat from "./Chat";
import Sidebar from "./Sidebar";

export default function Container() {
  return (
    <div className="flex h-5/6 w-2/3 border">
      <Sidebar />
      <Chat />
    </div>
  );
}
