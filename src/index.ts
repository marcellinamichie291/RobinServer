import express from "express";
import cors from "cors";
import binance from "./Binance/routes/binance";

const app = express();
const port = process.env.PORT || 3001;
const allowList = [
  "http://rorobot.io",
  "https://rorobot.io",
  "http://localhost",
];
const corsOptions = {
  origin: allowList,
  methods: "GET,POST",
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/", binance);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
