import Binance from "binance-api-node";

export const getCapitalConfigs = async (APIKey: string, APISecret: string) => {
    const binanceClient = Binance({
        apiKey: APIKey,
        apiSecret: APISecret
    });

    const result = await binanceClient.capitalConfigs();

    return {
        result,
    };
};