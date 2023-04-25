import SideBarFriend from "./SideBarFriend";
import SideBarNewMessage from "./SideBarNewMessage";

export default function Sidebar() {
  return (
    <div className="h-full w-1/3 bg-white border-r overflow-y-auto overflow-x-hidden ">
      <SideBarNewMessage />
      <SideBarFriend />
    </div>
  );
}
