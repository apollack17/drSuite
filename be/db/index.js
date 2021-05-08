const {getPatients, getPatientByName, createPatient} = require('./patients')
const {getProviders, updateProvider, createProvider} = require('./providers')
const {getServices, createService} = require('./services')



module.exports={
  getPatients,
  getPatientByName,
  createPatient,
  getProviders, 
  updateProvider,
  createProvider,
  getServices,
  createService,
}