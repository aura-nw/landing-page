import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useAccountEffect, useDisconnect } from "wagmi";
import copyLogo from "@/assets/images/img_copy_logo.svg";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import "./style.css";
import { toast } from "react-toastify";
function WalletConnectEVM() {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const toastConnected = () => toast.success("Connected.");
  const toastDisconnect = () => toast.error("Disconnected.");
  useAccountEffect({
    onConnect(data) {
      toastConnected();
    },
    onDisconnect() {
      toastDisconnect();
    },
  });
  return (
    <div className="mb-[80px]">
      <div className="main-container">
        <div className="flex flex-col items-center gap-6 lg:gap-16 mt-[14px]">
          <div className="xl:max-w-[867px] flex flex-col gap-10 px-2 items-center">
            {!isConnected && (
              <div className="flex flex-col gap-10 items-center">
                <div className="flex flex-col">
                  <h1 className="text-white self-stretch text-center lg:text-center text-[36px] lg:text-[48px] font-semibold leading-[52px] lg:leading-[80px] font-ppmori-semibold">
                    Your Journey Start Here
                  </h1>
                  <div className="text-medium-gray text-center text-xl lg:text-[20px] font-normal leading-8 max-w-[717px]">
                    But first, let’s get you some AURA
                  </div>
                </div>
                <ConnectButton.Custom>
                  {({ account, openConnectModal }) => {
                    return (
                      <button
                        onClick={openConnectModal}
                        className={`w-fit rounded-full bg-brand-gradient hover:text-[#FD9552] hover:bg-dark-charcoal hover:bg-none hover:border hover:border-[#262320] py-4 px-8 font-semibold text-black text-lg leading-normal h-[54px] flex items-center`}
                      >
                        Connect wallet
                      </button>
                    );
                  }}
                </ConnectButton.Custom>
              </div>
            )}
            {isConnected && (
              <div className="flex flex-col">
                <h1 className="text-white self-stretch text-center lg:text-center text-[36px] lg:text-[80px] font-semibold leading-[52px] lg:leading-[80px] font-ppmori-semibold">
                  Welcome
                </h1>
                <div className="flex gap-8 items-center justify-center">
                  <div className="address">{address}</div>
                  <Image
                    data-tooltip-id="disconnect"
                    data-tooltip-content="Disconnect wallet"
                    className="cursor-pointer"
                    src={copyLogo}
                    alt="copy"
                    height={32}
                    onClick={() => {
                      disconnect();
                    }}
                  />
                  <Tooltip id="disconnect" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletConnectEVM;
