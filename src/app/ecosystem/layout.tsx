import { Metadata } from "next";
import Tutorials from "../../sections/tutorials";

export const metadata: Metadata = {
    title: "Ecosystem",
    description: "Explore Aura Network's tech stack including Found Contract Suite, Pyxis Smart Account, Fee Registry, Software Development Kit and Infrastructure Application.",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-[#0C0A09]">
            {children}
            <Tutorials />
        </div>

    );
}
