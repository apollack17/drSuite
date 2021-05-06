const express = require("express");
const { getServices, createService } = require("../db");
const servicesRouter = express.Router();


servicesRouter.use((req, res, next) => {
  next();
});

servicesRouter.get("/", async (req, res, next) => {
  try {
    const services = await getServices();
    res.send(services);
  } catch ({ name, message }) {
    next({
      name: "getAllServices",
      message: "There was an error getting Services",
    });
  }
});

servicesRouter.post("/create", async (req, res, next) => {
  try {
    const service = await createService(req.body);
    res.send(service);
  } catch ({ message }) {
    next({ message });
  }
});

servicesRouter.patch("/update", async (req, res, next) => {
  try {
    const service = await updateService(req.body);
    res.send(service);
  } catch ({ message }) {
    next({ message });
  }
});

module.exports = servicesRouter;