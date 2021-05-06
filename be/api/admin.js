const express = require("express");
const { createProvider, getProviders } = require("../db");
const adminRouter = express.Router();


adminRouter.use((req, res, next) => {
  next();
});

adminRouter.get("/", async (req, res, next) => {
  try {
    const providers = await getProviders();
    res.send(providers);
  } catch ({ name, message }) {
    next({
      name: "getAllProviders",
      message: "There was an error getting Providers",
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