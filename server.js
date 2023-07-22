///express example?
var express = require("express");
var plivo = require("plivo");
var app = express();
app.use(express.json());
//https://press-node.onrender.com
app.get("/", (req, res, next) => {
  res.json({ message: "OK" });
});
app.post("/receive", function (req, res) {
  var client = new plivo.Client(
    process.env.PLVIO_AUTH_ID,
    process.env.PLVIO_AUTH_TOKEN
  );
  client.messages
    .create({
      src: process.env.FROM_NUMBER || "+919657990556",
      dst: process.env.TO_NUMBER || "+917499062397",
      //   ${req.body.From}: ${req.body.Body}`
      text: `Message sent by ${req.body.From} to ${req.body.To}. Message is ${req.body.Body}`,
      //   method: "GET",
      // url: "https://<yourdomain>.com/sms_status/",
    })
    .then(function (response) {
      console.log(response);
      //Prints only the message_uuid
      console.log(response.messageUuid);
    });
  res.send(req.body);
});
app.listen(process.env.PORT || 8000, function () {
  console.log("Example app listening on port 8000!");
});
//express with mongoose?
