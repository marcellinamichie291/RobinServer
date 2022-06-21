import Binance from "binance-api-node";

export const getDailyStats = async (APIKey: string, APISecret: string) => {
    const binanceClient = Binance({
        apiKey: APIKey,
        apiSecret: APISecret
    });

    const clean = binanceClient.ws.allTickers(tickers => {
        return(tickers);
    });

    clean();
};