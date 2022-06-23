import Binance from "binance-api-node";

export const getOrderBook = async (APIKey: string, APISecret: string) => {
  const binanceClient = Binance({
    apiKey: APIKey,
    apiSecret: APISecret,
  });

  const result = await binanceClient.book({
    symbol: "ETHBTC",
  });

  return {
    result,
  };
};
