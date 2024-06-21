"use client";
import dynamic from "next/dynamic";
import {
  useAccount
} from "wagmi";
import WalletConnectEVM from "../wallet-connect";
import Deposit from "./deposit";
import { useEffect } from "react";

function DepositAura() {
  useEffect(() => {
    document.title = "Deposit AURA to exchanges";
  }, []);
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
