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

patientRouter.get("/checkin", async (req, res, next) => {
  try {
    const patients = await getPatients();
    res.send({message: 'patient api is alive'});
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

patientRouter.post("/checkin", async (req, res, next) => {
  try {
    console.log("req.body is", req.body)
    //try breaking out my needed parameters destructured here
    const {firstName, middleInitial, lastName, street, city, state, zipcode, phoneNumber, email, dob, ssn} = req.body
    const patient = await createPatient(firstName, middleInitial, lastName, street, city, state, zipcode, phoneNumber, email, dob, ssn);
    res.send({patient});
  } catch ({ message }) {
    console.error(message)
    next({ message});
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