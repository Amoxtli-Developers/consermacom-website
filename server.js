require("dotenv").config();
const express = require("express");
const sendEmail = require("./api/send-email");

const app = express();
app.use(express.json());

app.post("/api/send-email", sendEmail);

const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));
