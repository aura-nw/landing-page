import Image from "next/image";
import ic_section_4 from "@/assets/images/ic_section_4.png";
import ic_section_42 from "@/assets/images/ic_section_42.png";
import Link from "next/link";

function Entertainment() {
  return (
    <div className="main-container">
      <div className="py-[64px] sm:py-[120px] justify-start items-center gap-10 sm:gap-5 flex flex-col sm:flex-row w-full">
        <div className="grow shrink basis-0 flex justify-end">
          <div className="w-full sm:w-[670px] h-auto sm:h-[480px] relative rounded-lg overflow-hidden">
            <Image
              className="w-full h-full"
              src={ic_section_4}
              alt="bg"
            />
            <Image
              className="mix-blend-screen top-0 left-[50px] sm:left-[100px] absolute w-[70%] h-auto sm:w-[464px] sm:h-[464px]"
              src={ic_section_42}
              alt="bg"
            />
          </div>
        </div>
        <div className="px-0 sm:px-6 2xl:px-24 py-0 sm:py-20 flex-col justify-start items-start gap-12 flex grow shrink basis-0">
          <div className="self-stretch flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-[#1c1f2a] text-[28px] sm:text-[38px] font-semibold font-nacelle leading-[41.80px]">
              Entertainment Through Blockchain
            </div>
            <div className="self-stretch text-[#64656a] text-lg font-normal font-interTight leading-[27px]">
              Transform creative content and real world assets into digital
              value through innovative tokenization capabilities. A
              comprehensive foundation to protect, manage, monetize, and
              distribute entertainment properties in the digital ecosystem.
            </div>
          </div>
          <Link href={"https://app.aura.network/"} target="_blank" className="group h-14 px-6 py-3.5 bg-[#3189e2] rounded-[99px] justify-center items-center gap-2 inline-flex hover:bg-blue-600 transition-all">
            <div className="text-white text-lg font-semibold font-interTight leading-[27px]">
              Try Aura now
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Entertainment;
