import bingx from "@/assets/images/img_bingx_logo.svg";
import mexc from "@/assets/images/img_mexc_logo.svg";
import gateio from "@/assets/images/img_gateio_logo.svg";
import depositBingx from "@/assets/images/deposit_bingx.svg";
import depositGate from "@/assets/images/deposit_gate.svg";
import depositMexc from "@/assets/images/deposit_mexc.svg";
import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useAccount, useWalletClient } from "wagmi";
import { fromBech32, toBech32 } from "@cosmjs/encoding";
//@ts-ignore
import { stripHexPrefix } from "crypto-addr-codec";
import TableHistory from "./table";
import { stringToHex, parseEther, createWalletClient, custom } from "viem";
import { aura } from "@/common/aura-chain";
function Deposit() {
  const [tutType, setTutType] = useState<string>("");
  const [cosmosAcc, setCosmosAcc] = useState<string>();
  const [copyAuraAddress, setCopyAuraAddress] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({ address: "", amount: "" });
  const [isFormValid, setIsFormValid] = useState(false);
  //   useEffect(() => {
  //     validateForm();
  //   }, [address, amount]);
  //   const validateForm = () => {
  //     if (!address) {
  //       errors.address = "address is required.";
  //     }

  //     if (!amount) {
  //       errors.amount = "amount is required.";
  //     }
  //     setErrors(errors);
  //     setIsFormValid(Object.keys(errors).length === 0);
  //   };
  const checkValidate = (type: string, value: string) => {
    if (type === "address" && value.trim() === "") {
      errors.address = "address is required.";
    } else {
      errors.address = "";
      setAddress(value);
    }
    if (type === "amount" && value.trim() === "") {
      errors.amount = "amount is required.";
    } else {
      errors.amount = "";
      setAmount(value);
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    if (isFormValid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors. Please correct them.");
    }
  }
//   const account = useAccount();


//   async function send() {
//     const [account] = await window.ethereum!.request({ method: 'eth_requestAccounts' })

//     const walletClient = createWalletClient({
//         account, 
//         chain: aura,
//         transport: http()
//     });

//     const hash = await walletClient.sendTransaction({
//       data: "0xaf41083482dc220518f95993b48e8b012e782d01",
//       account,
//       to: stringToHex(address),
//       value: parseEther(amount),
//     });
//   }

  return (
    <div className="flex flex-col">
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
            <Image
              src={depositBingx}
              alt="bingx"
              height={depositBingx?.height}
            />
          )}
          {tutType === "gateio" && (
            <Image
              src={depositGate}
              alt="gateio"
              height={depositGate?.height}
            />
          )}
          {tutType === "mexc" && (
            <Image src={depositMexc} alt="mexc" height={depositMexc?.height} />
          )}
          <div className="flex flex-col width">
            <div className="flex flex-col">
              <div className="text-tutorial mb-6">
                First, go to the Deposit section on your BingX account, and
                select AURA to retrieve the deposit address.
              </div>
              <form onSubmit={onSubmit} className="form-custom">
                <label className="form-label">
                  Enter <span className="orange">Deposit address </span>here
                </label>
                <div className="flex flex-col mb-6 mt-2">
                  <div className="form-input mb-1">
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter your deposit address from CEX"
                      onChange={(event) =>
                        checkValidate("address", event.target.value)
                      }
                    />
                  </div>
                  {errors.address && (
                    <div className="form-error">{errors.address}</div>
                  )}
                </div>
                <label className="form-label">Enter amount of AURA</label>
                <div className="flex flex-col mb-8 mt-2">
                  <div className="form-input flex mb-1">
                    <input
                      type="number"
                      name="amount"
                      placeholder="Amount"
                      onChange={(event) =>
                        checkValidate("amount", event.target.value)
                      }
                    />
                    <button type="button" className="pr-4">
                      max
                    </button>
                  </div>
                  {errors.amount && (
                    <div className="form-error">{errors.amount}</div>
                  )}

                  <span className="form-text-des">Balance: 4867 Aura</span>
                </div>

                <div className="mb-9">
                  <button
                    type="submit"
                    className="button-border-gradient bg-brand-gradient"
                    disabled={isLoading}
                  >
                    <div className="button-border-gradient-inside">
                      {isLoading ? "Loading..." : "Confirm & Deposit"}
                    </div>
                  </button>
                </div>
              </form>
              <div className="text-tutorial">
                Note: Direct deposit AURA to CEXes through the Hex address
                format is under construction, thus this page exists. Your AURA
                will be sent to an address that is operated by Aura Network, and
                we will sent it to your deposit address.
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-12">
        <TableHistory></TableHistory>
      </div>
    </div>
  );
}
export default Deposit;
