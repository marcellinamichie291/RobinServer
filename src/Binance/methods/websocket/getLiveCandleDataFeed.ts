import Binance from "binance-api-node";

export const getLiveCandleDataFeed = async (
  APIKey: string,
  APISecret: string
) => {
  const binanceClient = Binance({
    apiKey: APIKey,
    apiSecret: APISecret,
  });

  binanceClient.ws.candles("ETHUSDT", "1m", (candle) => {
    console.log(candle);
  });

};
