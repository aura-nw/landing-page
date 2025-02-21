import Image from "next/image";
import ic_section_3 from "@/assets/images/ic_section_3.png";
import Link from "next/link";

function Enterprise() {
  return (
    <div className="w-full py-[64px] sm:py-20 bg-[#2671cf] bg-[url('../assets/images/bg_section_31.png')] bg-cover bg-no-repeat" id="enterprise">
      <div className="main-container">
        <div className="justify-start items-center gap-5 flex flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-[670px] rounded-lg justify-start items-center flex">
            <Image className="mix-blend-screen" src={ic_section_3} alt="Example Image" width={556} height={556} />
          </div>
          <div className="grow shrink basis-0 px-0 sm:px-6 2xl:px-24 py-[20px] sm:py-20 flex-col justify-start items-center sm:items-start gap-12 inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-center sm:text-left text-white text-[28px] sm:text-[38px] font-semibold font-nacelle leading-[41.80px]">Enterprise RWA Verification System </div>
              <div className="self-stretch text-center sm:text-left text-white/80 text-lg font-normal font-interTight leading-[27px]">
                Deploy scalable solutions with verifiable credentials and enterprise-grade asset management. Our infrastructure enables secure tokenization while maintaining proof-of-ownership and
                operational excellence.
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

export default Enterprise;
