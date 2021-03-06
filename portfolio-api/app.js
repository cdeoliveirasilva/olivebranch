const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sendGrid = require("@sendGrid/mail");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Change later to only allow our server
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res, next) => {
  res.send("API Status: running");
});

app.post("/api/mail", (req, res, next) => {
  console.log(req.body);

  sendGrid.setApiKey(
    "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"
  );
  const msg = {
    to: "ca.oliveirasilva@hotmail.com",
    from: req.body.email,
    subject: "Website Contact",
    text: req.body.message,
  };

  sendGrid
    .send(msg)
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(401).json({
        success: false,
      });
    });
});

app.listen(3030, "0.0.0.0");
