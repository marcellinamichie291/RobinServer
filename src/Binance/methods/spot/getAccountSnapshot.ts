import Binance from "binance-api-node";

export const getAccountSnapshot = async (APIKey: string, APISecret: string) => {
  const binanceClient = Binance({
    apiKey: APIKey,
    apiSecret: APISecret,
  });

  const result = await binanceClient.accountSnapshot({
    type: "SPOT",
  });

  return {
    result,
  };
};

// Schedule job every 24 hours
export const Snapshot24HInterval = setInterval(
  getAccountSnapshot,
  1000 * 60 * 60 * 24
);
