const express = require("express");
const { getPatients, createPatient, getServicesByPatient } = require("../db");
const patientRouter = express.Router();


patientRouter.use((req, res, next) => {
  next();
});

patientRouter.get("/", async (req, res, next) => {
  try {
    const patients = await getPatients();
    res.send(patients);
  } catch ({ name, message }) {
    next({
      name: "getAllPatients",
      message: "There was an error getting patients",
    });
  }
});

patientRouter.get(`/:id`, async (req, res, next) => {
  try {
    const activeServices = await getServicesByPatient();
    res.send(activeServices);
  } catch ({name, message}) {
    next({
      name: "getAllActiveServices",
      message: "There was an error getting services by patient"
    });
  }
})

patientRouter.post("/create", async (req, res, next) => {
  try {
    const patient = await createPatient(req.body);
    res.send(patient);
  } catch ({ message }) {
    next({ message });
  }
});

patientRouter.patch("/update", async (req, res, next) => {
  try {
    const patient = await updatePatient(req.body);
    res.send(patient);
  } catch ({ message }) {
    next({ message });
  }
});

module.exports = patientRouter;