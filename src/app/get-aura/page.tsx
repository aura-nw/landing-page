"use client";
import {
  RainbowKitProvider,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { aura } from "@/common/aura-chain";
import WalletConnectEVM from "./wallet-connect";

const queryClient = new QueryClient();
const configWallet = getDefaultConfig({
  appName: "Aura Network",
  projectId: "86b13026f2930979d852f7dac07666b1",
  chains: [aura],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

function GetAura() {
  return (
    <WagmiProvider config={configWallet}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <WalletConnectEVM></WalletConnectEVM>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default GetAura;
