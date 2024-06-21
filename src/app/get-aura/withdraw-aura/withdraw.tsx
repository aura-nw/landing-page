import bingx from "@/assets/images/img_bingx_logo.svg";
import mexc from "@/assets/images/img_mexc_logo.svg";
import gateio from "@/assets/images/img_gateio_logo.svg";
import bingxTut from "@/assets/images/img_bingx_tut.svg";
import gateioTut from "@/assets/images/img_gateio_tut.svg";
import mexcTut from "@/assets/images/img_mexc_tut.svg";
import copyAura from "@/assets/images/img_copy_address_logo.svg";
import copiedAura from "@/assets/images/img_copied_address_logo.svg";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import Image from "next/image";
import { useAccount } from "wagmi";
import { fromBech32, toBech32 } from "@cosmjs/encoding";
import { Tooltip } from "react-tooltip";

//@ts-ignore
import { stripHexPrefix } from "crypto-addr-codec";
function Withdraw() {
  const [tutType, setTutType] = useState<string>("gateio");
  const [cosmosAcc, setCosmosAcc] = useState<string>();
  const [copyAuraAddress, setCopyAuraAddress] = useState<boolean>(false);
  const cutText = (value: string) => {
    if (value) {
      return (
        value?.substring(0, 8) +
        "..." +
        value?.substring(value?.length - 8, value?.length)
      );
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
  const convertEvmAddressToBech32Address = (
    prefix: string,
    ethAddress: string
  ): string => {
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
  useEffect(() => {
    setCosmosAcc(
      transferAddress("aura", _account?.address as string)?.accountAddress
    );
  }, [_account]);

  if (!_account?.address) {
    return <div></div>;
  }

  return (
    <div className="main-container sub-container flex flex-col">
      <div className="flex flex-col">
        <div className="introduce-title">
          Let’s get some AURA from one of our beloved partners below:
        </div>
        <div className="flex gap-8 items-center justify-center mt-6 partner">
          <div
            className={
              tutType === "bingx"
                ? "active partner-button cursor-pointer"
                : "partner-button cursor-pointer"
            }
            onClick={() => {
              setTutType("bingx");
              setCopyAuraAddress(false);
            }}
          >
            <Image src={bingx} alt="bingx" height={24} />
          </div>
          <div
            className={
              tutType === "gateio"
                ? "active partner-button cursor-pointer"
                : "partner-button cursor-pointer"
            }
            onClick={() => {
              setTutType("gateio");
              setCopyAuraAddress(false);
            }}
          >
            <Image src={gateio} alt="gate.io" height={24} />
          </div>
          <div
            className={
              tutType === "mexc"
                ? "active partner-button cursor-pointer"
                : "partner-button cursor-pointer"
            }
            onClick={() => {
              setTutType("mexc");
              setCopyAuraAddress(false);
            }}
          >
            <Image src={mexc} alt="mexc" height={24} />
          </div>
        </div>
      </div>
      {tutType != "" && (
        <div className="info flex gap-20 mt-15" style={{ marginTop: "60px" }}>
          {tutType === "bingx" && (
            <Image src={bingxTut} alt="bingx" height={bingxTut?.height} />
          )}
          {tutType === "gateio" && (
            <Image src={gateioTut} alt="gateio" height={gateioTut?.height} />
          )}
          {tutType === "mexc" && (
            <Image src={mexcTut} alt="mexc" height={mexcTut?.height} />
          )}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="text-tutorial">
                Step 1: Have some AURA in your Gate.io account.
              </div>
              <div className="text-tutorial">
                Step 2: Select AURA as token to withdraw through “On-chain
                withdrawal”
              </div>
              <div className="text-tutorial">
                Step 3: Insert the{" "}
                <span className="address-small-text">address below</span> in the
                “Address” box
              </div>
              <div className="text-tutorial">
                Step 4: Enter your desired amount of AURA to withdraw, and
                proceed with the transaction.
              </div>
            </div>
            <div className="aura-address-box">
              <div className="aura-address-box-2">
                <div className="address-small-text">
                  {
                    transferAddress("aura", _account?.address as string)
                      ?.accountAddress
                  }
                </div>
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
              <QRCode
                size={256}
                style={{ height: "224px", maxWidth: "100%", width: "100%" }}
                value={cosmosAcc || ""}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Withdraw;
