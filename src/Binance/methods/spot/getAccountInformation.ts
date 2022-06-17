import Binance from "binance-api-node";
import { db } from "../../../../firebase/Config"

export const getAccountInformation = async (APIKey: string, APISecret: string) => {
    db.collection("users").doc("")
    const binanceClient = Binance({
        apiKey: APIKey,
        apiSecret: APISecret
    });

    const result = await binanceClient.accountInfo();

    return {
        result,
    };
};