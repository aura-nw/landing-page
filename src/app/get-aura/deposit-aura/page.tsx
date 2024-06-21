"use client";
import dynamic from "next/dynamic";
import {
  useAccount
} from "wagmi";
import WalletConnectEVM from "../wallet-connect";
import Deposit from "./deposit";

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
