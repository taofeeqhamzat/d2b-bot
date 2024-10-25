// Section One

import Image from "next/image";

export default function SectionOne() {
  return (
    <div className="flex-col mt-20 flex items-center">
      <div className="shadow-[1px_0px_42px_-11px_rgba(189,189,189,1)] w-[67px] h-[67px] rounded-[13px] mt-12  flex flex-row items-center justify-center    ">
        <Image
          alt=""
          className="w-[30px]"
          width={1700}
          height={1700}
          src="/images/sentient.png"
        />
      </div>

      <h1 className="min-[681px]:mt-14 mt-12 font-medium text-[22px] min-[681px]:text-[28px]">
        Talk Data To Me
      </h1>
      <p className="mt-2 min-[681px]:w-[340px] w-[280px] text-[12px] text-center min-[681px]:text-[14px]">
        Choose a prompt below or write your own to start chatting with giggles
      </p>
      <p className="min-[681px]:text-[14px] text-[12px] mt-10 text-[#8b8b8b]">
        Ask about:
      </p>
      <div className="">
        <div className="mt-4 flex flex-row gap-1">
          <div className="border cursor-pointer w-fit h-fit border-solid border-[#E3E3E3] p-2 rounded-full">
            <p className="min-[681px]:text-xs text-[10px]">
              Who are data2bots?
            </p>
          </div>
          <div className="border cursor-pointer w-fit h-fit border-solid border-[#E3E3E3] p-2 rounded-full">
            <p className="min-[681px]:text-xs text-[10px]">
              What services do they offer?
            </p>
          </div>
          <div className="border hidden min-[469px]:block cursor-pointer w-fit h-fit border-solid border-[#E3E3E3] p-2 rounded-full">
            <p className="min-[681px]:text-xs text-[10px]">
              How can I join Data2Bots?
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-start flex-row gap-1">
          <div className="border cursor-pointer w-fit h-fit border-solid border-[#E3E3E3] p-2 rounded-full">
            <p className="min-[681px]:text-xs text-[10px]">
              Why should I choose Data2Bots?
            </p>
          </div>
          <div className="border cursor-pointer w-fit h-fit border-solid border-[#E3E3E3] p-2 rounded-full">
            <p className="min-[681px]:text-xs text-[10px]">
              Who is the CEO of Data2Bots?
            </p>
          </div>
        </div>
        <div className="mt-2 min-[469px]:hidden flex justify-start flex-row gap-1">
          <div className="border cursor-pointer w-fit h-fit border-solid border-[#E3E3E3] p-2 rounded-full">
            <p className="min-[681px]:text-xs text-[10px]">
              How can I join Data2Bots?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
