import express from "express";
import binance from "./Binance/routes/binance";

const app = express();
const port = process.env.PORT || 3001;

app.use("/", binance);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
