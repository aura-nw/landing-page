import Address from "@/components/address";
import dayjs from "dayjs";
import React from "react";
import { formatUnits } from "viem";
import { formatNumber } from "../../utils/numbers";
import { useAccount, useBalance } from "wagmi";

interface TableItemProps {
  txTime: string;
  evmTxHash: string;
  cosmosTxHash: string;
  depAddress: string;
  amount: number;
  status: string;
}

type props = {
  tableItem: TableItemProps;
};

const TableItem: React.FC<props> = ({ tableItem }) => {
  const { address } = useAccount();
  const balance = useBalance({
    address: address,
  });
  const _symbol = balance?.data?.symbol;

  return (
    <div className="frame-418 max-w-full">
      <div className="frame-359">
        <div className="frame-560">
          <div className="_18-24-24-15-10-2024">
            {dayjs(tableItem?.txTime)?.format("HH:mm:ss DD/MM/YYYY")}
          </div>
        </div>
        <div className="frame-554">
          <Address address={tableItem?.evmTxHash} link={true} ellipsis={true} />
        </div>
        <div className="frame-570">
          <Address
            address={tableItem?.cosmosTxHash}
            link={true}
            ellipsis={true}
          />
        </div>
        <div className="frame-571">
          <Address
            address={tableItem?.depAddress}
            link={true}
            ellipsis={true}
          />
        </div>
        <div className="frame-561">
          <div className="_20-aura">
            {formatNumber(formatUnits(BigInt(tableItem?.amount), 18))}{" "}
            {_symbol?.toString()}
          </div>
        </div>
        <div className="frame-572">
          <div className={tableItem?.status?.toLowerCase()}>
            {tableItem?.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableItem;
