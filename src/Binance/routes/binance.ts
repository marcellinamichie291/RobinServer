import express from "express"
import bodyParser from "body-parser"
import { getAccountInformation } from "../methods/spot/getAccountInformation";
import { getLatestPrice } from "../methods/spot/getLatestPrice";
import { getDailyStats } from "../methods/spot/getDailyStats";
import { getCapitalConfigs } from "../methods/spot/getCapitalConfigs";
import { db } from "../../../firebase/Config"

const router = express.Router();

const jsonParser = bodyParser.json();

router.post("/getAccountInformation", jsonParser, async (req, res) => {
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

router.post("/getLatestPrice", jsonParser, async (req, res) => {
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

router.post("/getCapitalConfigs", jsonParser, async (req, res) => {
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

        res.send(await getCapitalConfigs(apiKey, apiSecret));
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

