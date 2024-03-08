import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Learn about Aura Network Tech Stack",
    description: "Explore Aura Network's tech stack including Found Contract Suite, Pyxis Smart Account, Fee Registry, Software Development Kit and Infrastructure Application.",
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
