import Image from "next/image";
import ic_section_2 from "@/assets/images/ic_section_2.png";
import ic_section_32 from "@/assets/images/ic_section_32.png";

function BuiltIn() {
  return (
    <div className="w-full py-[64px] sm:py-[120px] bg-[#f0f9fe]" id="about">
      <div className="main-container">
        <div className="justify-start items-center gap-10 sm:gap-5 flex flex-col sm:flex-row">
          <div className="w-full sm:w-[480px] h-auto sm:h-80 relative rounded-lg">
            <Image
              className=""
              src={ic_section_2}
              alt="bg"
            />
            <Image
              className="mix-blend-screen -top-5 left-0 w-full absolute"
              src={ic_section_32}
              alt="bg"
            />
          </div>
          <div className="grow shrink basis-0 px-0 sm:px-6 2xl:px-24 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-[#1c1f2a] text-[28px] sm:text-[38px] font-semibold font-nacelle leading-[41.80px]">
              Built-in modularity
            </div>
            <div className="self-stretch justify-start items-start gap-5 flex flex-col sm:flex-row">
              <div className="grow shrink basis-0 text-[#64656a] text-lg font-normal font-interTight leading-[27px]">
                ‘Built-in Modularity’ of the tech stack is crucial in this
                context because it provides the technical flexibility necessary
                to optimally apply improvements in user experience.{" "}
              </div>
              <div className="grow shrink basis-0 text-[#64656a] text-lg font-normal font-interTight leading-[27px]">
                This means that advanced features that can either implement
                complex functionalities or abstract difficult user experiences
                can be applied without a complicated upgrade, i.e. soft or hard
                fork, of the base layer.
              </div>
            </div>
            <a className="self-stretch justify-start items-start gap-5 inline-flex" href="#enterprise">
              <div className="grow shrink basis-0 text-left text-[#3189e2] text-lg font-semibold font-interTight leading-[27px] hover:text-blue-400 animate-bounce">
                Scroll down ↓{" "}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuiltIn;
