"use client";
import { aura } from "@/common/aura-chain";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import WalletConnectEVM from "./wallet-connect";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    ssr: false, // If your dApp uses server side rendering (SSR)
  });
  useEffect(() => {
    const tutorialElement: any = document.querySelector(".tutorial");
    if (tutorialElement) {
      tutorialElement.style.display = "none";
    }
  }, []);

  return (
    <div className="bg-[#000] pb-24">
      <WagmiProvider config={configWallet}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <WalletConnectEVM></WalletConnectEVM>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      ></ToastContainer>
    </div>
  );
}
