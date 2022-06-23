import Binance from "binance-api-node";

export const getLiveCandleDataFeed = async (
  APIKey: string,
  APISecret: string
) => {
  const binanceClient = Binance({
    apiKey: APIKey,
    apiSecret: APISecret,
  });

  const clean = binanceClient.ws.candles("ETHBTC", "1m", (candle) => {
    return candle;
  });

  clean();
};
