import ChatBox from "@/lib/components/chat-box";
import SectionOne from "@/lib/components/section-one";

export default function Home() {
  return (
    <div className="w-full relative h-full flex-col flex items-center mt-20 ">
      <SectionOne />
      <ChatBox />
    </div>
  );
}
