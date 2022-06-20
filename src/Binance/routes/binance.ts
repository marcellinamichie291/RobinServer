import { useState } from "react";
import express from "express"
import bodyParser from "body-parser"

import { getAccountInformation } from "../methods/spot/getAccountInformation";
import { db } from "../../../firebase/Config"

const router = express.Router();

const jsonParser = bodyParser.json()

router.post("/", jsonParser, async (req, res) => {
  console.log(req.body)
  if (req.body) {

    const userID = req.body.userID;

    let apiKey, apiSecret

    console.log("HELLO")
    console.log(userID)
    // Her kan du hente ut req.body.userID og bruke den videre for å hente accountInformation til den brukeren.
    // here you can fetch req.body.userID and use it to fetch accountInformation to the user
    if (!userID) {
      res.send(404)
      console.log("Ka faeeeeen")
    }

    try {
      const userRef = db.collection("users").doc(userID);
      const doc = await userRef.get();
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        apiKey = doc.data().APIKey;
        apiSecret = doc.data().APISecret;

        console.log({ apiKey, apiSecret });

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

export default router;

