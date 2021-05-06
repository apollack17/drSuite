const {createPatient} = require('./patients')
const {getProviders, updateProvider, createProvider} = require('./providers')
const {createService} = require('./services')



module.exports={
  createPatient,
  getProviders, 
  updateProvider,
  createProvider,
  createService,
}