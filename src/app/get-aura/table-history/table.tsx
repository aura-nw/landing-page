import "./table.css";
import { useMediaQuery } from "react-responsive";
import MobileTableItem from "./mobile-table";
import TableItem from "./table-item";
interface TableItemProps {
  txTime: string;
  evmTxHash: string;
  cosmosTxHash: string;
  depAddress: string;
  amount: number;
  status: string;
}

type ActivityHistoryProp = {
  activityHistories: TableItemProps[];
}

export default function TableHistory({activityHistories} : ActivityHistoryProp) {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  if (isMobile) {
    return (
      <div className="flex flex-col">
        <div className="history">History</div>

        {activityHistories?.length > 0 ? (
          activityHistories?.map((item) => (
            <div className="frame-29779 mt-6" key={item?.evmTxHash}>
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
        {activityHistories?.length > 0 ? activityHistories?.map((item) => <TableItem tableItem={item} key={item?.evmTxHash} />) : <div className="w-full text-center p-16">No history yet</div>}
      </div>
    </div>
  );
}
