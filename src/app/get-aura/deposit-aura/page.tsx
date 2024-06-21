"use client";

import dynamic from "next/dynamic";

const Deposit = dynamic(() => import("../deposit"), { ssr: false });

function DepositAura() {
  return <Deposit></Deposit>;
}

export default DepositAura;
