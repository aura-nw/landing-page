"use client";

import dynamic from "next/dynamic";
import {
  useAccount
} from "wagmi";
import WalletConnectEVM from "../wallet-connect";
import Withdraw from "./withdraw";
import { useEffect } from "react";

function WithdrawAura() {
  useEffect(() => {
    document.title = "Withdraw AURA from exchanges";
  }, []);
  const { isConnected, address } = useAccount();
  return (
    <div>
      {!isConnected ? (
        <WalletConnectEVM></WalletConnectEVM>
      ) : (
        <div>
          <WalletConnectEVM></WalletConnectEVM>
          <Withdraw></Withdraw>
        </div>
      )}
    </div>
  );
}

export default WithdrawAura;
