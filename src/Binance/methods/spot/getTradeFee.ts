import Binance from "binance-api-node";

export const getTradeFee = async (APIKey: string, APISecret: string) => {
  const binanceClient = Binance({
    apiKey: APIKey,
    apiSecret: APISecret,
  });

  const result = await binanceClient.tradeFee();

  return {
    result,
  };
};
