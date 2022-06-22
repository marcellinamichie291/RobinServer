import Binance from "binance-api-node";

export const getExchangeInformation = async (APIKey: string, APISecret: string) => {
    const binanceClient = Binance({
        apiKey: APIKey,
        apiSecret: APISecret
    });

    const result = await binanceClient.exchangeInfo();

    return {
        result,
    };
};