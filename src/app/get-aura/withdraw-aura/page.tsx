"use client";

import dynamic from "next/dynamic";

const Withdraw = dynamic(() => import("../withdraw"), { ssr: false });

function WithdrawAura() {
  return <Withdraw></Withdraw>;
}

export default WithdrawAura;
