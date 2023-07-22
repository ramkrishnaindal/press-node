///express example?
// import { serverTimestamp } from "./node_modules/@firebase/firestore/dist/lite/packages/firestore/dist/lite/index.browser.esm2017.d";

var express = require("express");
const serverTimestamp = require("firebase/firestore").serverTimestamp;
var plivo = require("plivo");
const collection = require("firebase/firestore").collection;
const addDoc = require("firebase/firestore").addDoc;
const db = require("./firebase").db;
const auth = require("./firebase").auth;
var app = express();
app.use(express.json());
require("dotenv").config();
//https://press-node.onrender.com
app.get("/", (req, res, next) => {
  res.json({ message: "OK" });
});
app.post("/receive", async function (req, res) {
  var client = new plivo.Client(
    process.env.PLVIO_AUTH_ID,
    process.env.PLVIO_AUTH_TOKEN
  );
  const response = await client.messages.create({
    src: process.env.FROM_NUMBER || "+919657990556",
    dst: process.env.TO_NUMBER || "+917499062397",
    //   ${req.body.From}: ${req.body.Body}`
    text: `Message sent by ${req.body.From} to ${req.body.To}. Message is '${req.body.Body}'`,
    //   method: "GET",
    // url: "https://<yourdomain>.com/sms_status/",
  });

  const resp = await addDoc(collection(db, "messages"), {
    from: req.body.From,
    to: req.body.From,
    text: req.body.Body,
    createdAt: serverTimestamp(),
  });
  console.log("res", resp);

  res.json({ message: "Request sent successfully." });
});
app.listen(process.env.PORT || 8000, function () {
  console.log("Example app listening on port 8000!");
});
//express with mongoose?
