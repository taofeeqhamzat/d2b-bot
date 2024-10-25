"use client";

import Image from "next/image";

interface ConversationProps {
  messages: { sender: string; text: string }[];
}

export default function Conversation({ messages }: ConversationProps) {
  return (
    <>
      <div className="w-full shadow-[2px_0px_28px_-9px_rgba(0,0,0,0.5)] flex gap-4 items-center h-[64px] pl-20 pr-20 bg-white">
        <Image
          alt=""
          className="w-[40px] flex-shrink-0"
          width={1700}
          height={1700}
          src="/images/bot.png"
        />
        <h1 className="text-sm font-semibold">
          Data2bot <span className="font-light">(Giggles)</span>{" "}
        </h1>
      </div>
      <div className="min-[681px]:w-[654px]  w-full min-[681px]:pr-0 min-[681px]:pl-0 pl-4 pr-4 h-full mt-16">
        {messages.map((message, index) => (
          <div key={index} className="question-block  mt-6">
            {message.sender === "user" && (
              <div className="w-full gap-6 flex flex-row items-center">
                <div className="w-[40px] h-[40px] rounded-md bg-[#F5F5F5]"></div>
                <p className="text-sm">{message.text}</p>
              </div>
            )}
            {message.sender === "bot" && (
              <div className="w-full mt-4 gap-6 flex flex-row">
                <div className="shadow-[2px_0px_28px_-9px_rgba(0,0,0,0.5)] w-[40px] h-[40px] rounded-md flex flex-row items-center flex-shrink-0 justify-center">
                  <Image
                    alt=""
                    className="w-[30px] flex-shrink-0"
                    width={1700}
                    height={1700}
                    src="/images/bot.png"
                  />
                </div>
                <div className="flex pt-2 flex-col gap-4">
                  <h1 className="text-sm font-semibold">Results</h1>
                  <p className="text-sm w-full">{message.text}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
