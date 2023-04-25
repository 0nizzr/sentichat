import MainChat from "./MainChat";
import ChatHeader from "./ChatHeader";

export default function Chat() {
  return (
    <div className="flex flex-col w-2/3">
      <ChatHeader />
      <MainChat />
    </div>
  );
}
