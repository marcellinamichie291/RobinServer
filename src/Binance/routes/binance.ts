import express from "express"
import bodyParser from "body-parser"
import { getAccountInformation } from "../methods/spot/getAccountInformation";
import { getLatestPrice } from "../methods/spot/getLatestPrice";
import { getDailyStats } from "../methods/websocket/getDailyStats";
import { db } from "../../../firebase/Config"

const router = express.Router();

const jsonParser = bodyParser.json();

router.post("/", jsonParser, async (req, res) => {
  if (req.body) {
    const userID = req.body.userID;

    let apiKey, apiSecret

    // Her kan du hente ut req.body.userID og bruke den videre for å hente accountInformation til den brukeren.
    if (!userID) {
      res.send(404)
    }

    try {
      const userRef = db.collection("users").doc(userID);
      const doc = await userRef.get();
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        apiKey = doc.data().APIKey;
        apiSecret = doc.data().APISecret;

        // website you wish to  allow to connet
        res.setHeader('Access-Control-Allow-Origin','http://rorobot.io');

        // request method you wish to allow
        res.setHeader('Access-Control-Allow-Methods','GET, POST');

        res.send(await getAccountInformation(apiKey, apiSecret));
      }
    } catch (e) {
      console.error(e);
      res.send({ error: e, code: 500 });
    }
  } else {
    res.status(500).send("Body is required")
  }
});

router.post("/getLatestPrices", jsonParser, async (req, res) => {
  if (req.body) {
    const userID = req.body.userID;

    let apiKey, apiSecret

    // Her kan du hente ut req.body.userID og bruke den videre for å hente accountInformation til den brukeren.
    if (!userID) {
      res.send(404)
    }

    try {
      const userRef = db.collection("users").doc(userID);
      const doc = await userRef.get();
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        apiKey = doc.data().APIKey;
        apiSecret = doc.data().APISecret;

        res.send(await getLatestPrice(apiKey, apiSecret));
      }
    } catch (e) {
      console.error(e);
      res.send({ error: e, code: 500 });
    }
  } else {
    res.status(500).send("Body is required")
  }
});

//This API call is resource expensive
router.post("/getDailyStats", jsonParser, async (req, res) => {
  if (req.body) {
    const userID = req.body.userID;

    let apiKey, apiSecret

    // Her kan du hente ut req.body.userID og bruke den videre for å hente accountInformation til den brukeren.
    if (!userID) {
      res.send(404)
    }

    try {
      const userRef = db.collection("users").doc(userID);
      const doc = await userRef.get();
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        apiKey = doc.data().APIKey;
        apiSecret = doc.data().APISecret;

        res.send(await getDailyStats(apiKey, apiSecret));
      }
    } catch (e) {
      console.error(e);
      res.send({ error: e, code: 500 });
    }
  } else {
    res.status(500).send("Body is required")
  }
});

export default router;

