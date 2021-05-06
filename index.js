const express = require('express');
const server = express();
const client = require("./be/db/client");

require("dotenv").config();
const { PORT = 3000 } = process.env;

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true})) //browser comp?. 
server.use(bodyParser.json());
server.use(morgan("dev"));

const apiRouter = require("./be/api");
server.use("/api", apiRouter);

const providerRouter = require("./be/api");
server.use("/providers", providerRouter);

const adminRouter = require('./be/api')

server.listen(PORT, () => {
  console.log("The server brain is up on port", PORT);
  client.connect();
});