import GradientButton from "@/components/Button/GradientButton";
import Image from "next/image";
import Link from "next/link";
import ic_gradient_arrow from "@/assets/icons/ic_gradientArrow.svg";


function Introduction() {
    return (
        <div className="max-w-[867px] flex flex-col gap-8 lg:gap-12 px-2">
          <div className="flex flex-col items-center gap-10 lg:gap-6">
            <div className="w-full border border-solid border-[#FFD569] rounded-lg lg:rounded-full p-4 lg:py-3 lg:pl-5 lg:pr-3 bg-blur-brand-linear-gradient flex items-center justify-between max-w-[329px] xl:max-w-[512px]">
              <span className="text-light-yellow max-w-[220px] lg:max-w-full lg:w-[480px] text-[14px] leading-6">📣  Aura Network token migration is available. Migrate now!</span>
              <Link href="/">
                <Image src={ic_gradient_arrow} alt="ic_gradient_arrow" />
              </Link>
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 items-center">
              <div className="text-white self-stretch text-start lg:text-center text-[48px] lg:text-[80px] font-semibold leading-[52px] lg:leading-[80px] font-ppmori-semibold">
                The first blockchain for mass adoption with built-in modularity
              </div>
              <div className="text-medium-gray text-start lg:text-center text-xl lg:text-[22px] font-normal leading-8 max-w-[717px]">
                Aura Network is a high-performance L1 leading the mass adoption of Web3 in emerging markets
              </div>
            </div>
          </div>
          <div className="flex lg:justify-center">
            <GradientButton>Learn more</GradientButton>
          </div>
        </div>
    );
}

export default Introduction;