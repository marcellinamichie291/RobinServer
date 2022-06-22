import Binance from "binance-api-node";

export const getLatestPrice = async (APIKey: string, APISecret: string) => {
    const binanceClient = Binance({
        apiKey: APIKey,
        apiSecret: APISecret
    });

    const result = await binanceClient.prices({
        symbol: 'ETHBTC, BTCUSDT'
    });

    return {
        result,
    };
};