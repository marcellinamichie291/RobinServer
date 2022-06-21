import Binance from "binance-api-node";

export const getDailyStats = async (APIKey: string, APISecret: string) => {
    const binanceClient = Binance({
        apiKey: APIKey,
        apiSecret: APISecret
    });

    const result = await binanceClient.dailyStats();

    return {
        result,
    };
};