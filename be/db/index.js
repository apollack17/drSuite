const {createPatient} = require('./patients')
const {getProviders, updateProvider, createProvider} = require('./providers')
const {getServices, createService} = require('./services')



module.exports={
  createPatient,
  getProviders, 
  updateProvider,
  createProvider,
  getServices,
  createService,
}