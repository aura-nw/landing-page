import useActivityHistory from "@/hooks/useActivityHistory";
import { useEffect, useState } from "react";
import TableItem from "./table-item";
import { useAccount } from "wagmi";
import "./table.css";
import { useMediaQuery } from "react-responsive";
import MobileTableItem from "./mobile-table";
interface TableItemProps {
  txTime: string;
  evmTxHash: string;
  cosmosTxHash: string;
  depAddress: string;
  amount: number;
  status: string;
}

export default function TableHistory() {
  const account = useAccount();
  // const test = "0x7c698F755Cf38b71dEef73B77E0F1438EecA99F2";
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const [activityHistories, setActivityHistories] = useState<TableItemProps[]>(
    []
  );
  useEffect(() => {
    useActivityHistory(account?.address?.toLowerCase() || "").then((res) => {
      if (res?.length > 0) {
        const mappedList = res?.map((item) => {
          const status =
            item?.status === "completed" ? "success" : item?.status;
          return {
            txTime: item.created_at,
            evmTxHash: item.incoming_tx_hash,
            cosmosTxHash: item.outgoing_tx_hash,
            depAddress: item.cex_address,
            amount: Number(item.amount),
            status: status?.charAt(0).toUpperCase() + status?.slice(1),
          };
        });
        setActivityHistories(mappedList);
      }
    });
  }, []);

  if (isMobile) {
    return (
      <div className="flex flex-col">
        <div className="history">History</div>

        {activityHistories?.length > 0 ? (
          activityHistories?.map((item) => (
            <div className="frame-29779 mt-6">
              <MobileTableItem tableItem={item} />
            </div>
          ))
        ) : (
          <div className="w-full text-center p-16">No history yet</div>
        )}
      </div>
    );
  }

  return (
    <div className="table">
      <div className="history">History</div>
      <div className="frame-29612">
        <div className="header-table">
          <div className="header2">
            <div className="title">Deposit time</div>
          </div>
          <div className="header2">
            <div className="title">EVM TX hash</div>
          </div>
          <div className="header2">
            <div className="title">Cosmos TX hash</div>
          </div>
          <div className="header2">
            <div className="title">Deposit address</div>
          </div>
          <div className="header3">
            <div className="title">Amount</div>
          </div>
          <div className="header3">
            <div className="title">Status</div>
          </div>
        </div>
        {activityHistories?.length > 0 ? (
          activityHistories?.map((item) => <TableItem tableItem={item} />)
        ) : (
          <div className="w-full text-center p-16">No history yet</div>
        )}
      </div>
    </div>
  );
}
