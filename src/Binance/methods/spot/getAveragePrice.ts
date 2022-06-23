import Binance from "binance-api-node";

export const getAveragePrice = async (APIKey: string, APISecret: string) => {
  const binanceClient = Binance({
    apiKey: APIKey,
    apiSecret: APISecret,
  });

  const result = await binanceClient.avgPrice({
    symbol: "ETHBTC",
  });

  return {
    result,
  };
};
