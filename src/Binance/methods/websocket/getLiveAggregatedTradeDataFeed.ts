import Binance from "binance-api-node";

export const getLiveAggregatedTradeDataFeed = async (APIKey: string, APISecret: string) => {
    const binanceClient = Binance({
        apiKey: APIKey,
        apiSecret: APISecret
    });

    const clean = binanceClient.ws.aggTrades(["ETHBTC"], trade => {
        return(trade);
    })

    clean();
};