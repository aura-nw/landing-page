"use client";

import dynamic from "next/dynamic";
import {
  useAccount,
  useAccountEffect,
  useDisconnect,
  useReconnect,
} from "wagmi";
import WalletConnectEVM from "../wallet-connect";
const Withdraw = dynamic(() => import("../withdraw"), { ssr: false });

function WithdrawAura() {
  // return <Withdraw></Withdraw>;
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
