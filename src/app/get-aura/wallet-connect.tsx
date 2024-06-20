import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import copyLogo from "@/assets/images/img_copy_logo.svg";
import arrowRight from "@/assets/images/img_arrow_right.svg";
import arrowRight_orange from "@/assets/images/arrowRight_orange.svg";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import withdrawIcon from "@/assets/images/withdraw.svg";
import depositIcon from "@/assets/images/deposit.svg";
import "./style.css";
function WalletConnectEVM() {
  const _account = useAccount();
  const { disconnect } = useDisconnect();
  const [tabOpen, setTabOpen] = useState<string>("");
  return (
    <div className="mb-[80px]">
      <div className="main-container">
        <div className="flex flex-col items-center gap-6 lg:gap-16 mt-[14px]">
          <div className="xl:max-w-[867px] flex flex-col gap-10 px-2 items-center">
            {!_account?.address ? (
              <div className="flex flex-col">
                <h1 className="text-white self-stretch text-center lg:text-center text-[36px] lg:text-[48px] font-semibold leading-[52px] lg:leading-[80px] font-ppmori-semibold">Your Journey Start Here</h1>
                <div className="text-medium-gray text-center text-xl lg:text-[20px] font-normal leading-8 max-w-[717px]">But first, let’s get you some AURA</div>
              </div>
            ) : (
              <div className="flex flex-col">
                <h1 className="text-white self-stretch text-center lg:text-center text-[36px] lg:text-[80px] font-semibold leading-[52px] lg:leading-[80px] font-ppmori-semibold">Welcome</h1>
                <div className="flex gap-8 items-center justify-center">
                  <div className="address">{_account?.address}</div>
                  <Image
                    data-tooltip-id="disconnect"
                    data-tooltip-content="Disconnect wallet"
                    className="cursor-pointer"
                    src={copyLogo}
                    alt="copy"
                    height={32}
                    onClick={() => {
                      disconnect();
                      setTabOpen("");
                    }}
                  />
                  <Tooltip id="disconnect" />
                </div>
              </div>
            )}
            <ConnectButton.Custom>
              {({ account, openConnectModal }) => {
                if (!account) {
                  return (
                    <button onClick={openConnectModal} className={`w-fit rounded-full bg-brand-gradient hover:text-[#FD9552] hover:bg-dark-charcoal hover:bg-none hover:border hover:border-[#262320] py-4 px-8 font-semibold text-black text-lg leading-normal h-[54px] flex items-center`}>
                      Connect wallet
                    </button>
                  );
                }
              }}
            </ConnectButton.Custom>
          </div>
          {!_account?.address ? (
            <div className="get-more-aura-box">
              <div className="text-white self-stretch text-center lg:text-center font-ppmori-semibold description">More ways to get AURA</div>

              <a href="https://insight.aura.network/full-tutorial-how-to-buy-aura/" target="_blank" className="button-border-gradient bg-brand-gradient">
                <div className="button-border-gradient-inside">
                  Read article
                  <Image src={arrowRight} alt="gate.io" height={20} />
                </div>
              </a>
            </div>
          ) : (
            <div className={tabOpen === "deposit" ? "w-full" : ""}>
              {tabOpen === "" && (
                <div className="flex flex-col">
                  <div className="title-choose-action">What are you up to?</div>
                  <div className="flex gap-12 mb-40 flex-col lg:flex-row">
                    <div
                      className="card-tab-wrapper"
                      onClick={() => {
                        setTabOpen("withdraw");
                      }}
                    >
                      <div className="mb-12">
                        <Image src={withdrawIcon} alt="withdrawIcon" height={withdrawIcon?.height} />
                      </div>
                      <div className="text-white self-stretch font-ppmori-semibold description lg:text-[32px] mb-8">Withdraw AURA from CEXes</div>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <span className="orange">Go</span>
                        <Image src={arrowRight_orange} alt="gate.io" height={20} />
                      </div>
                    </div>
                    <div
                      className="card-tab-wrapper"
                      onClick={() => {
                        setTabOpen("deposit");
                      }}
                    >
                      <div className="mb-12">
                        <Image src={depositIcon} alt="depositIcon" height={depositIcon?.height} />
                      </div>
                      <div className="text-white self-stretch font-ppmori-semibold description lg:text-[32px] mb-8">Deposit AURA to CEXes</div>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <span className="orange">Go</span>
                        <Image src={arrowRight_orange} alt="gate.io" height={20} />
                      </div>
                    </div>
                  </div>
                  <div className="get-more-aura-box">
                    <div className="text-white self-stretch text-center lg:text-center font-ppmori-semibold description">More ways to get AURA</div>

                    <a href="https://insight.aura.network/full-tutorial-how-to-buy-aura/" target="_blank" className="button-border-gradient bg-brand-gradient">
                      <div className="button-border-gradient-inside">
                        Read article
                        <Image src={arrowRight} alt="gate.io" height={20} />
                      </div>
                    </a>
                  </div>
                </div>
              )}
              {tabOpen === "withdraw" && <Withdraw></Withdraw>}
              {tabOpen === "deposit" && <Deposit></Deposit>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WalletConnectEVM;
