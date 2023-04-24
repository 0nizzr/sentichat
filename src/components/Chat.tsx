import MainChat from "./MainChat";
import ChatHeader from "./ChatHeader";

export default function Chat() {
  return (
    <div className="flex flex-col bg-lime-800 w-2/3">
      <ChatHeader />
      <MainChat />
    </div>
  );
}
