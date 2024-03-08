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
        <div className="bg-[url('../assets/images/img_bg_mask_mb.png')] lg:bg-[url('../assets/images/img_bg_gradient.png')] lg:bg-cover bg-no-repeat">
            {children}
        </div>
    );
}
