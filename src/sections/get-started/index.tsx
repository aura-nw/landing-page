import Image from "next/image";
import ic_section_2 from "@/assets/images/ic_section_2.png";
import Link from "next/link";

function GetStarted() {
  return (
    <div className="w-full bg-[#eff2f4]">
      <div className="main-container">
        <div className="py-[64px] sm:py-20 justify-start items-start gap-14 flex flex-col">
          <div className="self-stretch justify-between items-start gap-5 flex flex-col sm:flex-row w-full"></div>
          <div className="self-stretch justify-center items-start gap-5 flex flex-col sm:flex-row">
            <div className="grow shrink basis-0 flex flex-col gap-8">
              <div className="grow shrink basis-0 text-[#1c1f2a] text-[38px] font-semibold font-nacelle leading-[41.80px] sm:max-w-[650px] min-h-[55px]">
                Get Started with Aura
              </div>

              <div className="grow shrink basis-0 p-10 bg-white rounded-lg flex-col justify-start items-start gap-10 inline-flex w-full sm:max-w-[670px]">
                <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-[#1c1f2a] text-[28px] font-semibold font-nacelle leading-[30.80px]">
                      For developers
                    </div>
                  </div>
                  <div className="self-stretch text-[#64656a] text-sm font-normal font-interTight leading-tight">
                    Start building, join the community, and contribute to
                  </div>
                </div>
                <Link
                  href={"https://docs.aura.network/"}
                  target="_blank"
                  className="group h-14 px-6 py-3.5 bg-white rounded-[99px] border border-[#3189e2] justify-center items-center gap-2 inline-flex hover:bg-gray-100 transition-all"
                >
                  <div className="text-[#1c1f2a] text-lg font-semibold font-interTight leading-[27px] group-hover:text-[#2671cf]">
                    Explore
                  </div>
                </Link>
              </div>
            </div>
            <div className="grow shrink basis-0 flex flex-col gap-8">
              <div className="grow shrink basis-0 text-[#64656a] text-xl font-normal font-interTight leading-[27px] sm:max-w-[650px] min-h-[55px]">
                Ready to dive into Aura? Here's how, whether you're a developer
                or a web3 enthusiast.
              </div>
              <div className="grow shrink basis-0 p-10 bg-[#1a3151] rounded-lg flex-col justify-start items-start gap-10 inline-flex w-full sm:max-w-[670px]">
                <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-white text-[28px] font-semibold font-nacelle leading-[30.80px]">
                      For web3 enthusiast
                    </div>
                  </div>
                  <div className="self-stretch text-white/80 text-sm font-normal font-interTight leading-tight">
                    Your gateway to our dApps
                  </div>
                </div>
                <Link
                  href={"https://x.com/AuraNetworkHQ"}
                  target="_blank"
                  className="h-14 px-6 py-3.5 bg-[#3189e2] rounded-[99px] justify-center items-center gap-2 inline-flex hover:bg-blue-600 transition-all"
                >
                  <div className="text-white text-lg font-semibold font-interTight leading-[27px]">
                    Follow Aura on X
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
