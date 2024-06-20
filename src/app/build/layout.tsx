import Tutorials from "@/sections/tutorials";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Build your DApps with Aura Network",
    description: "Learn how to build modular applications with Aura Network. Explore resources and tools to build DApps for emerging markets.",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-[url('../assets/images/img_bg_mask_mb.png')] lg:bg-[url('../assets/images/img_bg_universe.png')] lg:bg-cover bg-no-repeat">
            {children}
            <Tutorials />
        </div>

    );
}
