"use client";

import dynamic from "next/dynamic";
import {
  useAccount
} from "wagmi";
import WalletConnectEVM from "../wallet-connect";
import Withdraw from "./withdraw";

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
