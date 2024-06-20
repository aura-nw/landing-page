import Address from "@/components/address";
import dayjs from "dayjs";
import React, { useState } from "react";
import { formatUnits } from "viem";
import "./table-mobile.css";
import carretUp from "@/assets/icons/ic_carret_up.svg";
import clock from "@/assets/icons/ic_clock.svg";
import Image from "next/image";

interface MobileTableItemProps {
  txTime: string;
  evmTxHash: string;
  cosmosTxHash: string;
  depAddress: string;
  amount: number;
  status: string;
}

type props = {
  tableItem: MobileTableItemProps;
};

const MobileTableItem: React.FC<props> = ({ tableItem }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="frame-29681">
      <div className="frame-29779">
        <div className="heading">
          <div className="title">
            <div className="frame-1000002280">
              <Address address={tableItem?.evmTxHash} link={true} ellipsis={true} />
            </div>
            <div className="time-and-message">
              <div className="time">
              <Image src={clock} alt="" height={14} />
                <div className="cell-text2">{dayjs(tableItem.txTime).format("HH:mm:ss DD/MM/YYYY")}</div>
              </div>
            </div>
            <div className="in-out">
              <div className="in">{tableItem.status}</div>
            </div>
          </div>
          <div
            className="button cusor-pointer"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <Image src={carretUp} className={expand ? 'expanded': ''} alt="" height={16} />
          </div>
        </div>
        {expand && (
          <div className="flex flex-col w-full gap-2">
            <div className="line-18"></div>
            <div className="frame-29708">
              <div className="amount">Amount</div>
              <div className="_200-aura">{formatUnits(BigInt(tableItem.amount), 18)} AURA</div>
            </div>
            <div className="frame-29707">
              <div className="cosmos-tx-hash">Cosmos TX hash</div>
              <div className="frame-3099">
                <Address address={tableItem?.cosmosTxHash} link={true} ellipsis={true} />
              </div>
            </div>
            <div className="frame-29705">
              <div className="deposit-address">Deposit address</div>
              <div className="content">
                <Address address={tableItem?.depAddress} link={true} ellipsis={true} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileTableItem;
