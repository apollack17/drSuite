import {useState, useEffect} from 'react'

import { Card, makeStyles } from '@material-ui/core'

import BASE_URL from '../components/BASE_URL'


const useStyles = makeStyles({
  root: {
    background: 'blue',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',

  },
});
const cardStyles = makeStyles({
  root: {
    background: 'light blue',
    border: 1,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
})

const Admin = () => {
  const classes = useStyles();
  const classCard = cardStyles();
  const [patients, setPatients] = useState([])
  const [services, setServices] = useState([])
  const activeServiceIds = [];
  const activeServices = []


  const getPatientServices = async(patientId) => {
    await fetch(`${BASE_URL}/api/patients/${patientId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(result => {

      //here should be some fancy rendering solution to attach the specific service to the specific patient
      activeServices.push(result)
    })
    .then(console.log(services, "are the services"))

  }
  //getPatients should return all patients to be rendered in the return
  const getPatients = async() => {
    await fetch(`${BASE_URL}/api/admin`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(result => {
      setPatients(result)
    })
    .then(setServices(getPatientServices(patients.id)))
    .then(patients.forEach((patient) => {activeServiceIds.push(patient.id)
      console.log("active service Id's", activeServiceIds)}))
    .catch(console.error) }

  useEffect(() => {
    getPatients()


  }, [1]); 


    return (
      <div className={classes.root}>
      <h3>Active Patients</h3>
        {patients.map((patient, idx) => (
          <>
          <Card className={cardStyles.root}>
            <div className="adminBox">
              <p idx={idx}>{patient.lastName}, {patient.firstName}  patient Id is {patient.id}</p>
            </div>
          </Card>
          <Card>
            <div className="adminBox">
            
            </div>
          </Card>
          </>
        ))}
        {patients.forEach((patient) => {

          <>
          {console.log(patient)}
          {getPatientServices(patient.id)}
          <h2>{activeServices.serviceName}</h2>
          

          </>
          
          })}
      </div>
    )
        }

export default Admin;