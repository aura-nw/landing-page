import bingx from "@/assets/images/img_bingx_logo.svg";
import mexc from "@/assets/images/img_mexc_logo.svg";
import gateio from "@/assets/images/img_gateio_logo.svg";
import depositBingx from "@/assets/images/deposit_bingx.jpg";
import depositGate from "@/assets/images/deposit_gate.jpg";
import depositMexc from "@/assets/images/deposit_mexc.jpg";
import Image from "next/image";
import {
  useAccount,
  useSendTransaction,
  useBalance,
  useWaitForTransactionReceipt,
  BaseError,
  useReconnect,
} from "wagmi";
import TableHistory from "./table";
import { stringToHex, parseEther, parseUnits, formatUnits } from "viem";
import { useForm, Controller } from "react-hook-form";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

interface TableItemProps {
  txTime: string;
  evmTxHash: string;
  cosmosTxHash: string;
  depAddress: string;
  amount: number;
  status: string;
}

function Deposit() {
  const [tutType, setTutType] = useState<string>("gateio");
  const {
    sendTransaction,
    data: hash,
    isPending,
    error,
  } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const {
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const { address, isConnected, isConnecting, isDisconnected, isReconnecting } =
    useAccount();
  // const test = "0x7c698F755Cf38b71dEef73B77E0F1438EecA99F2";
  const balance = useBalance({
    address: address,
  });
  const _amount = formatUnits(BigInt(balance?.data?.value || 0), 18);
  const _symbol = balance?.data?.symbol;

  const addMaxAmount = () => {
    if (_amount && Number(_amount) && Number(_amount) > 0) {
      setValue("amount", Math.floor(Number(_amount)));
    }
  };
  const notify = () => toast.success("Transaction confirmed.");
  const onSubmit = async (data: any) => {
    return sendTransaction({
      to: "0xaf41083482dc220518f95993b48e8b012e782d01",
      value: parseEther(data.amount),
      data: stringToHex(data.address),
    });
  };
  useEffect(() => {
    if (isConfirmed) {
      reset();
      notify();
      setTimeout(() => {
        getActivityHistory(address || "");
      }, 3000);
    }
  }, [isConfirmed]);
  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    setValue("amount", inputValue.replace(/[^0-9]/g, ""));
  };

  const getActivityHistory = (fromAddress: string) => {
    const url =
      "https://cex.staging.aura.network/public/DepositService/deposits";

    const request: AxiosRequestConfig = {
      url: url,
      method: "get",
      params: {
        from: fromAddress,
      },
    };

    const res: Promise<AxiosResponse<DepositHistory[]>> =
      axios.request(request);
    return res
      .then((response) => response.data)
      .then((res) => {
        if (res?.length > 0) {
          const mappedList = res?.map((item) => {
            const status =
              item?.status === "completed" ? "success" : item?.status;
            return {
              txTime: item.created_at,
              evmTxHash: item.incoming_tx_hash,
              cosmosTxHash: item.outgoing_tx_hash,
              depAddress: item.cex_address,
              amount: Number(item.amount),
              status: status?.charAt(0).toUpperCase() + status?.slice(1),
            };
          });
          setActivityHistories(mappedList);
        } else {
          setActivityHistories([]);
        }
      });
  };

  const [activityHistories, setActivityHistories] = useState<TableItemProps[]>(
    []
  );
  useEffect(() => {
    if (address) {
      getActivityHistory(address?.toLowerCase() || "");
    }
  }, [address]);
  const { reconnect } = useReconnect();

  useEffect(() => {
    if (!isConnected) {
      reconnect();
      console.log('-----------reconnect')
    }
  }, [isConnected]);

  if (isDisconnected) {
    redirect("/get-aura");
  }

  return (
    <div className="main-container sub-container flex flex-col">
      {!isConnected && (
        <div className="flex flex-col">
          <div className="introduce-title">
            Let’s deposit some AURA to your desired CEX below:
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
              }}
            >
              <Image src={mexc} alt="mexc" height={24} />
            </div>
          </div>
        </div>
      )}
      {tutType != "" && isConnected && (
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
                      render={({ field }) => (
                        <input
                          {...field}
                          placeholder="Enter your deposit address from CEX"
                        />
                      )}
                    />
                  </div>
                  {errors.address && (
                    <div className="form-error">
                      {errors.address.message?.toString()}
                    </div>
                  )}
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
                    <button
                      type="button"
                      className="pr-4"
                      onClick={() => addMaxAmount()}
                    >
                      max
                    </button>
                  </div>
                  {errors.amount && (
                    <div className="form-error">
                      {errors.amount.message?.toString()}
                    </div>
                  )}
                  <span className="form-text-des">
                    Balance: {_amount?.toString()} {_symbol?.toString()}
                  </span>
                </div>
                <div className="mb-9">
                  <button
                    type="submit"
                    className="button-border-gradient bg-brand-gradient"
                    disabled={isPending || isConfirming}
                  >
                    <div className="button-border-gradient-inside">
                      {isPending
                        ? "Confirming..."
                        : isConfirming
                        ? "Waiting for confirmation..."
                        : "Deposit"}
                    </div>
                  </button>
                  {/* {isConfirming && (
                    <div className="text-noti mt-2">
                      Waiting for confirmation...
                    </div>
                  )} */}
                  {/* {isConfirmed && <div>Transaction confirmed.</div>} */}
                  {error && (
                    <div>
                      Error:{" "}
                      {(error as BaseError).shortMessage || error.message}
                    </div>
                  )}
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
        <TableHistory activityHistories={activityHistories}></TableHistory>
      </div>
    </div>
  );
}
export default Deposit;
