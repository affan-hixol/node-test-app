const express = require("express");
const app = express();
const cors = require("cors");
require("../db/conn");
const userdb = require("../model/userSchema");
const {
  CLIENT_ID,
  CLIENT_SECRET,
  PORT,
  FRONTEND_URL,
  CALL_BACK_URL,
} = require("../config");
const firebaseAdmin = require("../config/firebase");

app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
    methods: "GET,POST,PUT,DELETE",
  })
);

app.use(express.json());

// root url
app.get("/", (req, res) => {
  res.json({
    CLIENT_ID,
    CLIENT_SECRET,
    PORT,
    FRONTEND_URL,
    CALL_BACK_URL,
    MESSAGE: `server start at port no ${PORT}`,
  });
});

app.get("/connection", (req, res, next) => {
  return res.send({ message: "Successfully Access to AFFAN PC!" });
});

app.listen(PORT, () => {
  console.log(`server start at port no ${PORT}`);
});
