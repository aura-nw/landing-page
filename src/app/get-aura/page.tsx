"use client";
import img_circel_gradient_logo from "@/assets/images/img_circel_gradient_logo.png";
import img_circle_pyxis from "@/assets/images/img_circle_pyxis.svg";
import img_halotrade from "@/assets/images/img_halotrade.svg";
import img_horoscope from "@/assets/images/img_horoscope.svg";
import img_mstr from "@/assets/images/img_mstr.webp";
import img_seekhype from "@/assets/images/img_seekhype.svg";

import { AURA_ECOSYSTEM } from "@/common";
import Image from "next/image";
import Link from "next/link";
import GradientButton from "../../components/Button/GradientButton";
import Card from "../../sections/statistics/components/Card";
import { ConnectButton, RainbowKitProvider, darkTheme, getDefaultConfig, lightTheme } from "@rainbow-me/rainbowkit";
import config from "next/config";
import { WagmiProvider, useAccount } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet } from "viem/chains";
import { aura } from "@/common/aura-chain";
import { useEffect, useState } from "react";
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
