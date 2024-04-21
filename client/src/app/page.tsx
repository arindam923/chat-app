import ChatSection from "@/components/home/ChatSection";
import MessageSection from "@/components/home/MessageSection";
import Sidebar from "@/components/home/Sidebar";
import WidgetSection from "@/components/home/WidgetSection";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen bg-neutral-950 text-white">
      <Sidebar />
      <MessageSection />
      <ChatSection chatId="123" />
      <WidgetSection />
    </main>
  );
}
