"use client";
import { aura } from "@/common/aura-chain";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";
import { WagmiProvider } from "wagmi";
import WalletConnectEVM from "./wallet-connect";

// export const metadata: Metadata = {
//   title: "Get Aura with Aura Network",
//   description: "",
// };

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const configWallet = getDefaultConfig({
    appName: "Aura Network",
    projectId: "86b13026f2930979d852f7dac07666b1",
    chains: [aura],
    ssr: true, // If your dApp uses server side rendering (SSR)
  });
  return (
    <div className="bg-[#000]">
      <WagmiProvider config={configWallet}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <WalletConnectEVM></WalletConnectEVM>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}
