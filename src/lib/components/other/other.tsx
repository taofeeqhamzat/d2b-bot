// "use client";

// import Image from "next/image";

// interface ConversationProps {
//   messages: { sender: string; text: string }[];
// }

// export default function Conversation({ messages }: ConversationProps) {
//   return (
//     <>
//       <div className="w-full shadow-[2px_0px_28px_-9px_rgba(0,0,0,0.5)] flex gap-4 items-center h-[64px] pl-20 pr-20 bg-white">
//         <Image
//           alt=""
//           className="w-[40px] flex-shrink-0"
//           width={1700}
//           height={1700}
//           src="/images/bot.png"
//         />
//         <h1 className="text-sm font-semibold">
//           Data2bot <span className="font-light">(Giggles)</span>{" "}
//         </h1>
//       </div>
//       <div className="min-[681px]:w-[654px]  w-full min-[681px]:pr-0 min-[681px]:pl-0 pl-4 pr-4 h-full mt-16">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`flex mt-6  w-full ${
//               message.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             {message.sender === "user" && (
//               <div className="flex items-center w-full gap-4">
//                 <div className="w-[40px] h-[40px] rounded-md bg-[#F5F5F5]"></div>
//                 <div className="bg-[#f1f1f1] p-3 rounded-lg w-full">
//                   <p className="text-sm">{message.text}</p>
//                 </div>
//               </div>
//             )}
//             {message.sender === "bot" && (
//               <div className="flex items-center w-full gap-4">
//                 <div className="p-3 rounded-lg w-full">
//                   <h1 className="text-sm font-semibold">Results</h1>
//                   <p className="text-sm">{message.text}</p>
//                 </div>
//                 <div className="shadow-[2px_0px_28px_-9px_rgba(0,0,0,0.5)] w-[40px] h-[40px] rounded-md flex items-center justify-center">
//                   <Image
//                     alt=""
//                     className="w-[30px]"
//                     width={1700}
//                     height={1700}
//                     src="/images/bot.png"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
