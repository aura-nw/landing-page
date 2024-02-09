import Link from "next/link";
import React from "react";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center">
      <Link target="_blank" href="https://insight.aura.network/full-tutorial-how-to-buy-aura/" className="w-full rounded-full hover:bg-gradient-to-br from-[#FF697B] via-[#FC8E4F] to-[#FFD569] p-[1px] h-[56px] flex items-center">
        <div className="w-full rounded-full bg-light-charcoal hover:text-[#FD9552] py-4 px-8 font-semibold text-lg h-[54px] flex items-center justify-center">
          {children}
        </div>
      </Link>
    </div>
  )
}

export default Button;
