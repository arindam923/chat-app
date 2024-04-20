import ChatSection from "@/components/home/ChatSection";
import MessageSection from "@/components/home/MessageSection";
import Sidebar from "@/components/home/Sidebar";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen bg-neutral-950 text-white">
      <Sidebar />
      <MessageSection />
      <ChatSection />
    </main>
  );
}
