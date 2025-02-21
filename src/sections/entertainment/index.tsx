import Image from "next/image";
import ic_section_4 from "@/assets/images/ic_section_4.png";
import ic_section_42 from "@/assets/images/ic_section_42.png";
import Link from "next/link";

function Entertainment() {
  return (
    <div className="main-container">
      <div className="py-[64px] sm:py-[120px] justify-start items-center gap-10 sm:gap-5 flex flex-col sm:flex-row w-full">
        <div className="flex-1 basis-auto px-0 sm:px-6 2xl:px-24 py-0 sm:py-20 flex-col justify-start items-start gap-12 flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="text-[#1c1f2a] text-[28px] sm:text-[38px] font-semibold font-nacelle leading-[41.80px] max-w-[500px]">Entertainment Through RWA Chain</div>
            <div className="text-[#64656a] text-xl font-normal font-interTight leading-[27px] max-w-[500px]">
              Transform entertainment properties into verified on-chain assets through self-sovereign infrastructure. Aura Network enables secure tokenization and proof-of-ownership for real-world
              entertainment assets, from media rights to franchise properties.
            </div>
          </div>
          {/* <Link
            href={"https://app.aura.network/"}
            target="_blank"
            className="group h-14 px-6 py-3.5 bg-[#3189e2] rounded-[99px] justify-center items-center gap-2 inline-flex hover:bg-blue-600 transition-all"
          >
            <div className="text-white text-lg font-semibold font-interTight leading-[27px]">Try Aura now</div>
          </Link> */}
        </div>
        <div className="flex-1 basis-auto flex justify-end">
          <div className="w-full sm:max-w-[670px] h-auto sm:max-h-[480px] relative rounded-lg overflow-hidden">
            <Image className="w-full h-full" src={ic_section_4} alt="bg" />
            {/* <Image
              className="mix-blend-screen top-0 left-[50px] sm:left-[100px] absolute w-[70%] h-auto sm:w-[464px] sm:h-[464px]"
              src={ic_section_42}
              alt="bg"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entertainment;
