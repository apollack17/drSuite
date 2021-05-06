const {createPatient} = require('./patients')
const {createProvider} = require('./providers')
const {createService} = require('./services')


module.exports={
  createPatient,
  createProvider,
  createService,
}