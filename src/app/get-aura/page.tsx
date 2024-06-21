"use client";
import Image from "next/image";
import withdrawIcon from "@/assets/images/withdraw.svg";
import depositIcon from "@/assets/images/deposit.svg";
import arrowRight from "@/assets/images/img_arrow_right.svg";
import arrowRight_orange from "@/assets/images/arrowRight_orange.svg";
import Link from "next/link";
import { PAGE_ROUTE } from "@/common";
import { useEffect } from "react";

function GetAura() {
  useEffect(() => {
    document.title = "Get AURA";
  }, []);
  return (
    <div className="mb-[80px]">
      <div className="main-container">
        <div className="flex flex-col items-center gap-6 lg:gap-16 mt-[14px]">
          <div className="xl:max-w-[867px] flex flex-col gap-10 px-2 items-center">
            <div className="flex flex-col items-center gap-16">
              <div>
                <div className="flex flex-col">
                  <h1 className="text-white self-stretch text-center lg:text-center text-[36px] lg:text-[48px] font-semibold leading-[52px] lg:leading-[80px] font-ppmori-semibold">
                    Your Journey Start Here
                  </h1>
                  <div className="title-choose-action">What are you up to?</div>
                  <div className="flex gap-12 mb-[120px] flex-col lg:flex-row">
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
                          Withdraw AURA from exchanges
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer">
                          <span className="orange">Go</span>
                          <Image
                            src={arrowRight_orange}
                            alt="gate.io"
                            height={20}
                          />
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
                          Deposit AURA to exchanges
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer">
                          <span className="orange">Go</span>
                          <Image
                            src={arrowRight_orange}
                            alt="gate.io"
                            height={20}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="get-more-aura-box">
            <div className="text-[16px] leading-[24px] lg:text-[24px] lg:leading-[40px] font-[600] text-white text-center font-ppmori-semibold">
              Wanna convert some AURA that you already have to the new AURA EVM?
            </div>

            <a
              href="https://halotrade.zone/convert-token"
              target="_blank"
              className="button-border-gradient bg-brand-gradient"
            >
              <div className="button-border-gradient-inside">
                Visit Halotrade
                <Image src={arrowRight} alt="gate.io" height={20} />
              </div>
            </a>
          </div>
          <div className="mt-[48px] lg:mt-[0px]">
            <div className="text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-[400] text-white self-stretch text-center font-ppmori-semibold">
              For more details,
              <a
                href="https://insight.aura.network/full-tutorial-how-to-buy-aura/"
                target="_blank"
                className="ml-2 text-[#13B0FF]"
              >
                read this article
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetAura;
