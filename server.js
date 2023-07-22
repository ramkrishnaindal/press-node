///express example?
var express = require("express");
var plivo = require("plivo");
var app = express();
app.use(express.json());
app.get("/", function (req, res) {
  var client = new plivo.Client(
    "MAZDE5NTVLNTI4MTMZOG",
    "NTU1ZTg2NjViYzQyNzdhODBkMmNlNjg1ZWNkZmM4"
  );
  //   client.messages
  //     .create({
  //       src: "+12025550000",
  //       dst: "+12025551111",
  //       text: "Hello, this is a sample message",
  //       method: "GET",
  //       url: "https://<yourdomain>.com/sms_status/",
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //       //Prints only the message_uuid
  //       console.log(response.messageUuid);
  //     });
  res.send(req.body);
});
app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});
//express with mongoose?
