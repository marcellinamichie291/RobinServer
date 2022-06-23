import Binance from "binance-api-node";

export const getTradeHistory = async (APIKey: string, APISecret: string) => {
  const binanceClient = Binance({
    apiKey: APIKey,
    apiSecret: APISecret,
  });

  const result = await binanceClient.tradesHistory({
    symbol: "ETHBTC",
  });

  return {
    result,
  };
};
