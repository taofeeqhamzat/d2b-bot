// ChatBox

interface ChatBoxProps {
  onSendMessage: () => void;
}

export default function ChatBox({ onSendMessage }: ChatBoxProps) {
  return (
    <div className="fixed w-full min-[681px]:pl-0 min-[681px]:pr-0 pl-4 pr-4 min-[681px]:w-fit bottom-10">
      <div className="w-full min-[681px]:w-[654px] h-[119px] bg-[#F5F5F5] pb-16 border border-solid border-[#D9D9D9] rounded-[13px] relative">
        <textarea
          name="chat"
          id="chat"
          className="bg-transparent outline-none border-none text-[14px] p-4 resize-none w-full h-full"
          placeholder="Ask Giggles..."
        ></textarea>
        <button
          className="cursor-pointer p-2 absolute bottom-[10px] right-[28px] min-[681px]:right-[20px]"
          onClick={onSendMessage}
        >
          <object
            className="w-[28px] pointer-events-none"
            type="image/svg+xml"
            data={"/svg/send.svg"}
          ></object>
        </button>
      </div>
    </div>
  );
}
