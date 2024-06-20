import bingx from "@/assets/images/img_bingx_logo.svg";
import mexc from "@/assets/images/img_mexc_logo.svg";
import gateio from "@/assets/images/img_gateio_logo.svg";
import depositBingx from "@/assets/images/deposit_bingx.svg";
import depositGate from "@/assets/images/deposit_gate.svg";
import depositMexc from "@/assets/images/deposit_mexc.svg";
import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useAccount, useSendTransaction, useBalance } from "wagmi";
import TableHistory from "./table";
import { stringToHex, parseEther, parseUnits, formatUnits } from "viem";
import { useForm, Controller } from "react-hook-form";
function Deposit() {
  const [tutType, setTutType] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { sendTransaction } = useSendTransaction();

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const account = useAccount();
  const balance = useBalance({
    address: account.address,
  });
  const _amount = formatUnits(BigInt(balance?.data?.value || 0), 18);

  const addMaxAmount = () => {
    if (_amount && Number(_amount) && Number(_amount) > 0) {
      setValue("amount", Math.round(Number(_amount)));
    }
  };

  const onSubmit = async (data: any) => {
    return sendTransaction({
      to: "0xaf41083482dc220518f95993b48e8b012e782d01",
      value: parseEther(data.amount),
      data: stringToHex(data.address),
    });
  };
  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    setValue("amount", inputValue.replace(/[^0-9]/g, ""));
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="introduce-title">Let’s get some AURA from one of our beloved partners below:</div>
        <div className="flex gap-8 items-center justify-center mt-6 partner">
          <div
            className={tutType === "bingx" ? "active partner-button cursor-pointer" : "partner-button cursor-pointer"}
            onClick={() => {
              setTutType("bingx");
            }}
          >
            <Image src={bingx} alt="bingx" height={24} />
          </div>
          <div
            className={tutType === "gateio" ? "active partner-button cursor-pointer" : "partner-button cursor-pointer"}
            onClick={() => {
              setTutType("gateio");
            }}
          >
            <Image src={gateio} alt="gate.io" height={24} />
          </div>
          <div
            className={tutType === "mexc" ? "active partner-button cursor-pointer" : "partner-button cursor-pointer"}
            onClick={() => {
              setTutType("mexc");
            }}
          >
            <Image src={mexc} alt="mexc" height={24} />
          </div>
        </div>
      </div>

      {tutType != "" && (
        <div className="info flex gap-20 mt-15" style={{ marginTop: "60px" }}>
          {tutType === "bingx" && <Image src={depositBingx} alt="bingx" height={depositBingx?.height} />}
          {tutType === "gateio" && <Image src={depositGate} alt="gateio" height={depositGate?.height} />}
          {tutType === "mexc" && <Image src={depositMexc} alt="mexc" height={depositMexc?.height} />}
          <div className="flex flex-col width">
            <div className="flex flex-col">
              <div className="text-tutorial mb-6">First, go to the Deposit section on your BingX account, and select AURA to retrieve the deposit address.</div>
              <form onSubmit={handleSubmit(onSubmit)} className="form-custom">
                <label className="form-label">
                  Enter <span className="orange">Deposit address </span>here
                </label>

                <div className="flex flex-col mb-6 mt-2">
                  <div className="form-input mb-1">
                    <Controller
                      name="address"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        pattern: {
                          value: /^aura.{39}$/,
                          message: "Invalid address",
                        },
                      }}
                      render={({ field }) => <input {...field} placeholder="Enter your deposit address from CEX" />}
                    />
                  </div>
                  {errors.address && <div className="form-error">{errors.address.message?.toString()}</div>}
                </div>
                <label className="form-label">Enter amount of AURA</label>

                <div className="flex flex-col mb-8 mt-2">
                  <div className="form-input flex mb-1">
                    <Controller
                      name="amount"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        pattern: {
                          value: /^\d+$/,
                          message: "Amount must be a positive number",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="Amount"
                          {...field}
                          onChange={handleChange}
                        />
                      )}
                    />
                    <button type="button" className="pr-4" onClick={() => addMaxAmount()}>
                      max
                    </button>
                  </div>
                  {errors.amount && <div className="form-error">{errors.amount.message?.toString()}</div>}
                  <span className="form-text-des">Balance: {_amount?.toString()} Aura</span>
                </div>
                <div className="mb-9">
                  <button
                    type="submit"
                    className="button-border-gradient bg-brand-gradient"
                    // disabled={isLoading}
                  >
                    <div className="button-border-gradient-inside">
                      {/* {isLoading ? "Loading..." : "Confirm & Deposit"} */}
                      Confirm & Deposit
                    </div>
                  </button>
                </div>
              </form>
              <div className="text-tutorial">Note: Direct deposit AURA to CEXes through the Hex address format is under construction, thus this page exists. Your AURA will be sent to an address that is operated by Aura Network, and we will sent it to your deposit address.</div>
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
