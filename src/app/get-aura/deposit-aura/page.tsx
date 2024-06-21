"use client";
import dynamic from "next/dynamic";
import {
  useAccount,
  useAccountEffect,
  useDisconnect,
  useReconnect,
} from "wagmi";
import WalletConnectEVM from "../wallet-connect";
const Deposit = dynamic(() => import("../deposit"), { ssr: false });

function DepositAura() {
  const { isConnected, address } = useAccount();
  return (
    <div>
      {!isConnected ? (
        <WalletConnectEVM></WalletConnectEVM>
      ) : (
        <div>
          <WalletConnectEVM></WalletConnectEVM>
          <Deposit></Deposit>
        </div>
      )}
    </div>
  );
}

export default DepositAura;
