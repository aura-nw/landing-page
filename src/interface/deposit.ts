enum DepositStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  PROCESSING = "PROCESSING",
  FAILED = "FAILED",
  COMPLETED = "completed",
}

interface DepositHistory {
  user_address: string;
  cex: string | null;
  cex_address: string;
  amount: string;
  status: DepositStatus;
  created_at: string;
  incoming_tx_hash: string;
  incoming_block_height: number;
  outgoing_tx_hash: string;
  outgoing_block_height: number;
}
