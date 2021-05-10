const express = require("express");
const { createProvider} = require("../db");
const { getPatients } = require("../db")
const adminRouter = express.Router();


adminRouter.use((req, res, next) => {
  next();
});

adminRouter.get("/", async (req, res, next) => {
  try {
    const patients = await getPatients();
    res.send(patients);
  } catch ({ name, message }) {
    next({
      name: "getAllPatients",
      message: "There was an error getting Patients",
    });
  }
});

adminRouter.post("/create", async (req, res, next) => {
  try {
    const provider = await createProvider(req.body);
    res.send(provider);
  } catch ({ message }) {
    next({ message });
  }
});

adminRouter.patch("/update", async (req, res, next) => {
  try {
    const provider = await updateProvider(req.body);
    res.send(provider);
  } catch ({ message }) {
    next({ message });
  }
});

module.exports = adminRouter;