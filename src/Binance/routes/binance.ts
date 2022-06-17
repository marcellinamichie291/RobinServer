import { useState } from "react";
import express from "express";
import { getAccountInformation } from "../methods/spot/getAccountInformation";
import { db } from "../../../firebase/Config"

const router = express.Router();

router.post("/", async (req, res) => {
  const userID = req.body.userID;
  const [APIKey, setAPIKey] = useState("");
  const [APISecret, setAPISecret] = useState("");

  console.log("HELLO")
  console.log(userID)
  // Her kan du hente ut req.body.userID og bruke den videre for å hente accountInformation til den brukeren.
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
      setAPIKey(doc.data().APIKey);
      setAPISecret(doc.data().APISecret);
  
      console.log(APIKey, APISecret);

      res.send(await getAccountInformation(APIKey, APISecret));
    }
  } catch (e) {
    console.error(e);
    res.send({ error: e, code: 500 });
  }
});

export default router;
