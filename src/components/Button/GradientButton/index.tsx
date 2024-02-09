import Link from "next/link";
import React from "react";

function GradientButton({ children, className, href }: { children: React.ReactNode, className?: string, href?: string }) {
    return (
        <Link href={href ?? "/"} className={`w-fit rounded-full bg-brand-gradient hover:text-[#FD9552] hover:bg-dark-charcoal hover:bg-none hover:border hover:border-[#262320] py-4 px-8 font-semibold text-black text-lg leading-normal h-[54px] flex items-center ${className}`}>
            {children}
        </Link>
    )
}

export default GradientButton;
