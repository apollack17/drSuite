const express = require('express');
const server = express();
const client = require("./be/db/client");

require("dotenv").config();
const { PORT = 3001 } = process.env;

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");


server.use(express.json());
server.use(express.urlencoded({extended: true})) //browser comp?. 
server.use(bodyParser.json());
server.use(morgan("dev"));
server.use(cors());

const apiRouter = require("./be/api");
server.use("/api", apiRouter);

const adminRouter = require("./be/api");
server.use("/admin", adminRouter);

const serviceRouter = require('./be/api')
server.use("/service", serviceRouter)

const patientRouter = require('./be/api');
server.use("/patient", patientRouter)

server.listen(PORT, () => {
  console.log("The server brain is up on port", PORT);
  client.connect();
});