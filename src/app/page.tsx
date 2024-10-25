"use client";

import { useState } from "react";
import ChatBox from "@/lib/components/chat-box";
import Conversation from "@/lib/components/response";
import SectionOne from "@/lib/components/section-one";

export default function Home() {
  const [showConversation, setShowConversation] = useState(false);

  const handleSendMessage = () => {
    setShowConversation(true);
  };

  return (
    <div className="w-full relative h-fit flex-col flex items-center pb-60">
      {showConversation ? <Conversation /> : <SectionOne />}
      <ChatBox onSendMessage={handleSendMessage} />
    </div>
  );
}
