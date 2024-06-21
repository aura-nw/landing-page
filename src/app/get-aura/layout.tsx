"use client";
import { aura } from "@/common/aura-chain";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
const WalletConnectEVM = dynamic(() => import("./wallet-connect"), { ssr: false });
// export const metadata: Metadata = {
//   title: "Get Aura with Aura Network",
//   description: "",
// };

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#000] pb-24">
      <RainbowKitProvider>
        {children}
      </RainbowKitProvider>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"></ToastContainer>
    </div>
  );
}
