import Binance from "binance-api-node";

export const getLiveTradeDataFeed = async (
  APIKey: string,
  APISecret: string
) => {
  const binanceClient = Binance({
    apiKey: APIKey,
    apiSecret: APISecret,
  });

  const clean = binanceClient.ws.trades(["ETHBTC"], (trade) => {
    return trade;
  });

  clean();
};
