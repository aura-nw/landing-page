import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import copyLogo from "@/assets/images/img_copy_logo.svg";
import bingx from "@/assets/images/img_bingx_logo.svg";
import mexc from "@/assets/images/img_mexc_logo.svg";
import gateio from "@/assets/images/img_gateio_logo.svg";
import bingxTut from "@/assets/images/img_bingx_tut.svg";
import gateioTut from "@/assets/images/img_gateio_tut.svg";
import mexcTut from "@/assets/images/img_mexc_tut.svg";
import copyAura from "@/assets/images/img_copy_address_logo.svg";
import copiedAura from "@/assets/images/img_copied_address_logo.svg";
import arrowRight from "@/assets/images/img_arrow_right.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fromBech32, toBech32 } from "@cosmjs/encoding";
//@ts-ignore
import { stripHexPrefix } from "crypto-addr-codec";
import QRCode from "react-qr-code";
import { Tooltip } from "react-tooltip";

function WalletConnectEVM() {
  const [tutType, setTutType] = useState<string>("");
  const [cosmosAcc, setCosmosAcc] = useState<string>();
  const [copyAuraAddress, setCopyAuraAddress] = useState<boolean>(false);
  const cutText = (value: string) => {
    if (value) {
      return value?.substring(0, 8) + "..." + value?.substring(value?.length - 8, value?.length);
    }
  };

  const makeBech32Encoder = (prefix: string) => {
    return (data: Buffer) => toBech32(prefix, data);
  };

  const makeBech32Decoder = (currentPrefix: string) => {
    return (input: string) => {
      const { prefix, data } = fromBech32(input);
      if (prefix !== currentPrefix) {
        throw Error("Unrecognised address format");
      }
      return Buffer.from(data);
    };
  };

  const makeChecksummedHexDecoder = () => {
    return (data: string) => {
      return Buffer.from(stripHexPrefix(data), "hex");
    };
  };

  const convertEvmAddressToBech32Address = (prefix: string, ethAddress: string): string => {
    let result = ethAddress;
    if (result.startsWith("0x")) {
      try {
        const data = makeChecksummedHexDecoder()(ethAddress);
        result = makeBech32Encoder(prefix)(data);
      } catch (err) {
        return "";
      }
    }
    return result?.toLowerCase();
  };

  const transferAddress = (prefix: string, address: string) => {
    if (address?.startsWith(prefix) && address?.length >= 63) {
      return {
        accountEvmAddress: null,
        accountAddress: address,
      };
    }

    if (address?.startsWith("0x")) {
      return {
        accountEvmAddress: address?.toLowerCase(),
        accountAddress: convertEvmAddressToBech32Address(prefix, address),
      };
    }
  };

  const _account = useAccount();
  const { disconnect } = useDisconnect();
  useEffect(() => {
    setCosmosAcc(transferAddress("aura", _account?.address as string)?.accountAddress);
  }, [_account]);

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
                  <div className="address">{cutText(_account?.address)}</div>
                  <Image data-tooltip-id="disconnect" data-tooltip-content="Disconnect wallet" className="cursor-pointer" src={copyLogo} alt="copy" height={32} onClick={() => disconnect()} />
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
              <div className="text-white self-stretch text-center lg:text-center font-ppmori-semibold description">
                More ways to get AURA
              </div>

              <a href="https://insight.aura.network/full-tutorial-how-to-buy-aura/" target="_blank" className="button-border-gradient bg-brand-gradient">
                <div className="button-border-gradient-inside">
                  Read article
                  <Image src={arrowRight} alt="gate.io" height={20} />
                </div>
              </a>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="introduce-title">Let’s get some AURA from one of our beloved partners below:</div>
                <div className="flex gap-8 items-center justify-center mt-6 partner">
                  <div
                    className="partner-button cursor-pointer"
                    onClick={() => {
                      setTutType("bingx");
                      setCopyAuraAddress(false);
                    }}
                  >
                    <Image src={bingx} alt="bingx" height={24} />
                  </div>
                  <div
                    className="partner-button cursor-pointer"
                    onClick={() => {
                      setTutType("gateio");
                      setCopyAuraAddress(false);
                    }}
                  >
                    <Image src={gateio} alt="gate.io" height={24} />
                  </div>
                  <div
                    className="partner-button cursor-pointer"
                    onClick={() => {
                      setTutType("mexc");
                      setCopyAuraAddress(false);
                    }}
                  >
                    <Image src={mexc} alt="mexc" height={24} />
                  </div>
                </div>
              </div>
              {tutType === "bingx" && (
                <div className="info flex gap-20" style={{ marginTop: "60px" }}>
                  <Image src={bingxTut} alt="bingx" height={bingxTut?.height} />
                  <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                      <div className="text-tutorial">Step 1: Have some AURA in your BingX account.</div>
                      <div className="text-tutorial">Step 2: Select AURA as token to withdraw through “On-chain withdrawal”</div>
                      <div className="text-tutorial">
                        Step 3: Insert the <span className="address-small-text">address below</span> in the “Address” box
                      </div>
                      <div className="text-tutorial">Step 4: Enter your desired amount of AURA to withdraw, and proceed with the transaction.</div>
                    </div>
                    <div className="aura-address-box">
                      <div className="aura-address-box-2">
                        <div className="address-small-text">{transferAddress("aura", _account?.address as string)?.accountAddress}</div>
                        <Image
                          data-tooltip-id="copy"
                          data-tooltip-content={copyAuraAddress ? "Copied!" : "Copy"}
                          className="cursor-pointer"
                          src={copyAuraAddress ? copiedAura : copyAura}
                          alt="bingx"
                          height={16}
                          onClick={() => {
                            navigator.clipboard.writeText(cosmosAcc || "");
                            setCopyAuraAddress(true);
                          }}
                        />
                        <Tooltip id="copy" />
                      </div>
                      <QRCode size={256} style={{ height: "224px", maxWidth: "100%", width: "100%" }} value={cosmosAcc || ""} viewBox={`0 0 256 256`} />
                    </div>
                  </div>
                </div>
              )}
              {tutType === "gateio" && (
                <div className="info flex gap-20 mt-15" style={{ marginTop: "60px" }}>
                  <Image src={gateioTut} alt="bingx" height={gateioTut?.height} />
                  <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                      <div className="text-tutorial">Step 1: Have some AURA in your Gate.io account.</div>
                      <div className="text-tutorial">Step 2: Select AURA as token to withdraw through “On-chain withdrawal”</div>
                      <div className="text-tutorial">
                        Step 3: Insert the <span className="address-small-text">address below</span> in the “Address” box
                      </div>
                      <div className="text-tutorial">Step 4: Enter your desired amount of AURA to withdraw, and proceed with the transaction.</div>
                    </div>
                    <div className="aura-address-box">
                      <div className="aura-address-box-2">
                        <div className="address-small-text">{transferAddress("aura", _account?.address as string)?.accountAddress}</div>
                        <Image
                          data-tooltip-id="copy"
                          data-tooltip-content={copyAuraAddress ? "Copied!" : "Copy"}
                          className="cursor-pointer"
                          src={copyAuraAddress ? copiedAura : copyAura}
                          alt="bingx"
                          height={16}
                          onClick={() => {
                            navigator.clipboard.writeText(cosmosAcc || "");
                            setCopyAuraAddress(true);
                          }}
                        />
                        <Tooltip id="copy" />
                      </div>
                      <QRCode size={256} style={{ height: "224px", maxWidth: "100%", width: "100%" }} value={cosmosAcc || ""} viewBox={`0 0 256 256`} />
                    </div>
                  </div>
                </div>
              )}
              {tutType === "mexc" && (
                <div className="info flex gap-20 mt-15" style={{ marginTop: "60px" }}>
                  <Image src={mexcTut} alt="bingx" height={mexcTut?.height} />
                  <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                      <div className="text-tutorial">Step 1: Have some AURA in your MEXC account.</div>
                      <div className="text-tutorial">Step 2: Select AURA as token to withdraw through “On-chain withdrawal”</div>
                      <div className="text-tutorial">
                        Step 3: Insert the <span className="address-small-text">address below</span> in the “Address” box
                      </div>
                      <div className="text-tutorial">Step 4: Enter your desired amount of AURA to withdraw, and proceed with the transaction.</div>
                    </div>
                    <div className="aura-address-box">
                      <div className="aura-address-box-2">
                        <div className="address-small-text">{transferAddress("aura", _account?.address as string)?.accountAddress}</div>
                        <Image
                          data-tooltip-id="copy"
                          data-tooltip-content={copyAuraAddress ? "Copied!" : "Copy"}
                          className="cursor-pointer"
                          src={copyAuraAddress ? copiedAura : copyAura}
                          alt="bingx"
                          height={16}
                          onClick={() => {
                            navigator.clipboard.writeText(cosmosAcc || "");
                            setCopyAuraAddress(true);
                          }}
                        />
                        <Tooltip id="copy" />
                      </div>
                      <QRCode size={256} style={{ height: "224px", maxWidth: "100%", width: "100%" }} value={cosmosAcc || ""} viewBox={`0 0 256 256`} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WalletConnectEVM;
