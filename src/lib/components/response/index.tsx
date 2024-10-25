"use client";

import { useState } from "react";
import Image from "next/image";

export default function Conversation() {
  // State to hold conversation messages
  const [messages] = useState([
    {
      sender: "user",
      text: "Who are the data2bots team?",
    },
    {
      sender: "bot",
      text: "We are an IT consulting company committed to providing our clients with cutting-edge and effective data solutions and strategies to improve their business productivity. Through a fusion of technological innovation, we foster lasting impact and sustainable growth. We actively contribute to cultivating an environment that fosters creative innovation and excellence across all operations. We seamlessly navigate the complexities of data, leveraging cutting-edge technologies and insights to develop bespoke solutions tailored to our client’s unique challenges. Our commitment to excellence is unwavering. We thrive on redefining the data transformation process, delivering actionable intelligence that propels success.",
    },
  ]);

  // Function to add a new message to the conversation

  return (
    <div className="w-[654px] h-full mt-16">
      {messages.map((message, index) => (
        <div key={index} className="question-block mt-6">
          {/* User question */}
          {message.sender === "user" && (
            <div className="w-full gap-6 flex flex-row items-center">
              <div className="w-[40px] h-[40px] rounded-md bg-[#F5F5F5]"></div>
              <p className="text-sm">{message.text}</p>
            </div>
          )}
          {/* User question */}

          {/* Bot response */}
          {message.sender === "bot" && (
            <div className="w-full mt-4 gap-6 flex flex-row">
              <div className="shadow-[2px_0px_28px_-9px_rgba(0,0,0,0.5)] w-[40px] h-[40px] rounded-md flex flex-row items-center flex-shrink-0 justify-center">
                <Image
                  alt=""
                  className="w-[20px] flex-shrink-0"
                  width={1700}
                  height={1700}
                  src="/images/sentient.png"
                />
              </div>
              <div className="flex pt-2 flex-col gap-4">
                <h1 className="text-sm font-semibold">Results</h1>
                <p className="text-sm w-full">{message.text}</p>
              </div>
            </div>
          )}
          {/* Bot response */}
        </div>
      ))}
    </div>
  );
}
