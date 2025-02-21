import Image from "next/image";
import ic_section_3 from "@/assets/images/government-framework.png";
import Link from "next/link";

function GovernmentFramework() {
  return (
    <div className="w-full py-[64px] sm:py-20 bg-[#1A3151]" id="enterprise">
      <div className="main-container">
        <div className="justify-start items-center gap-5 flex flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-[670px] rounded-lg justify-start items-center flex bg-[#234E85]">
            <Image className="mix-blend-screen w-full" src={ic_section_3} alt="Example Image" width={556} height={556} />
          </div>
          <div className="grow shrink basis-0 px-0 sm:px-6 2xl:px-24 py-[20px] sm:py-20 flex-col justify-start items-center sm:items-start gap-12 inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-center sm:text-left text-white text-[28px] sm:text-[38px] font-semibold font-nacelle leading-[41.80px]">Government Framework</div>
              <div className="self-stretch text-center sm:text-left text-white/80 text-lg font-normal font-interTight leading-[27px]">
                Enable public sector transformation through blockchain-based asset management and verifiable credentials. A comprehensive foundation for government services with secure identity
                verification and regulatory compliance.
              </div>
            </div>
            {/* <Link
              href={"https://app.aura.network/"}
              target="_blank"
              className="group h-14 px-6 py-3.5 bg-white rounded-[99px] border border-[#3189e2] justify-center items-center gap-2 inline-flex hover:bg-gray-100 transition-all"
            >
              <div className="text-[#1c1f2a] text-lg font-semibold font-interTight leading-[27px] group-hover:text-[#2671cf]">Explore our apps</div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovernmentFramework;
