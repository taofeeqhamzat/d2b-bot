"use client";

import { useState } from "react";
import ChatBox from "@/lib/components/chat-box";
import Conversation from "@/lib/components/response";
import SectionOne from "@/lib/components/section-one";

interface Message {
  sender: string;
  text: string;
}

interface RasaResponse {
  text?: string;
  image?: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showConversation, setShowConversation] = useState(false);
  const url = "https://a26b-102-91-93-240.ngrok-free.app";

  const endpoint = `${url}/webhooks/rest/webhook`;

  const handleSendMessage = async (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: message },
    ]);

    setShowConversation(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: "test_user",
          message: message,
        }),
      });

      const rasaResponses: RasaResponse[] = await response.json();

      rasaResponses
        .filter((rasaResponse) => rasaResponse.text !== undefined)
        .forEach((rasaResponse) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: rasaResponse.text! },
          ]);
        });
    } catch (error) {
      console.error("Error sending message to Rasa:", error);
    }
  };

  return (
    <div className="w-full relative h-fit flex-col flex items-center pb-60">
      {showConversation ? <Conversation messages={messages} /> : <SectionOne />}
      <ChatBox onSendMessage={handleSendMessage} />
    </div>
  );
}
