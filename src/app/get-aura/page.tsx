"use client";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { WagmiProvider, useAccount } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { aura } from "@/common/aura-chain";
import Image from "next/image";
import withdrawIcon from "@/assets/images/withdraw.svg";
import depositIcon from "@/assets/images/deposit.svg";
import copyLogo from "@/assets/images/img_copy_logo.svg";
import arrowRight from "@/assets/images/img_arrow_right.svg";
import arrowRight_orange from "@/assets/images/arrowRight_orange.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PAGE_ROUTE } from "@/common";

const queryClient = new QueryClient();
const configWallet = getDefaultConfig({
  appName: "Aura Network",
  projectId: "86b13026f2930979d852f7dac07666b1",
  chains: [aura],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

function GetAura() {
  const _account = useAccount();
  useEffect(() => {
    window.scroll(0, 0);
  }, [_account]);
  return (
    <div className="flex flex-col items-center gap-16">
      {!_account?.address ? (
        <div className="get-more-aura-box">
          <div className="text-white self-stretch text-center lg:text-center font-ppmori-semibold description">
            More ways to get AURA
          </div>

          <a
            href="https://insight.aura.network/full-tutorial-how-to-buy-aura/"
            target="_blank"
            className="button-border-gradient bg-brand-gradient"
          >
            <div className="button-border-gradient-inside">
              Read article
              <Image src={arrowRight} alt="gate.io" height={20} />
            </div>
          </a>
        </div>
      ) : (
        <div>
          <div className="flex flex-col">
            <div className="title-choose-action">What are you up to?</div>
            <div className="flex gap-12 mb-40 flex-col lg:flex-row">
              <Link href={PAGE_ROUTE.WITHDRAW_AURA}>
                <div className="card-tab-wrapper">
                  <div className="mb-12">
                    <Image
                      src={withdrawIcon}
                      alt="withdrawIcon"
                      height={withdrawIcon?.height}
                    />
                  </div>
                  <div className="text-white self-stretch font-ppmori-semibold description lg:text-[32px] mb-8">
                    Withdraw AURA from CEXes
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <span className="orange">Go</span>
                    <Image src={arrowRight_orange} alt="gate.io" height={20} />
                  </div>
                </div>
              </Link>
              <Link href={PAGE_ROUTE.DEPOSIT_AURA}>
                <div className="card-tab-wrapper">
                  <div className="mb-12">
                    <Image
                      src={depositIcon}
                      alt="depositIcon"
                      height={depositIcon?.height}
                    />
                  </div>
                  <div className="text-white self-stretch font-ppmori-semibold description lg:text-[32px] mb-8">
                    Deposit AURA to CEXes
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <span className="orange">Go</span>
                    <Image src={arrowRight_orange} alt="gate.io" height={20} />
                  </div>
                </div>
              </Link>
            </div>
            <div className="get-more-aura-box">
              <div className="text-white self-stretch text-center lg:text-center font-ppmori-semibold description">
                More ways to get AURA
              </div>

              <a
                href="https://insight.aura.network/full-tutorial-how-to-buy-aura/"
                target="_blank"
                className="button-border-gradient bg-brand-gradient"
              >
                <div className="button-border-gradient-inside">
                  Read article
                  <Image src={arrowRight} alt="gate.io" height={20} />
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetAura;
