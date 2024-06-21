function formatNumber(amount: number | null | undefined | string, maximumFractionDigits: number = 2, compact?: boolean) {
  const { format } = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: maximumFractionDigits,
    notation: compact ? "compact" : "standard",
  });
  if (amount === null || amount === undefined || amount === 0 || amount === "0") {
    return "-";
  }
  if (Number(amount) >= 1000000000) {
    return "1B";
  }
  return format(+amount);
}

export { formatNumber }
