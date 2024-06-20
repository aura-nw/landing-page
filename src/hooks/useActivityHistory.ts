import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const useActivityHistory = (fromAddress: string): Promise<DepositHistory[]> => {
  const url = "https://cex.staging.aura.network/public/DepositService/deposits";

  const request: AxiosRequestConfig = {
    url: url,
    method: "get",
    params: {
      from: fromAddress,
    },
  };

  const res: Promise<AxiosResponse<DepositHistory[]>> = axios.request(request);
  return res.then((response) => response.data);
};
export default useActivityHistory;
