require("dotenv").config();

const PORT = process.env.PORT || 3006;

const CALL_BACK_URL = process.env.CALL_BACK_URL;

const DATABASE_URL = process.env.DATABASE_URL;

const FRONTEND_URL = process.env.FRONTEND_URL;

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

module.exports = {
  PORT,
  CLIENT_ID,
  DATABASE_URL,
  FRONTEND_URL,
  CALL_BACK_URL,
  CLIENT_SECRET,
};
