import Tutorials from "@/sections/tutorials";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Introduction to Aura Network",
    description: "Discover Aura Network, the high-performance Layer 1 ecosystem with built-in modularity for emerging markets",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-[#000]">
            {children}
            <Tutorials />
        </div>
    );
}
