import {useState, useEffect} from 'react'

import { Card, makeStyles } from '@material-ui/core'


const BASE_URL = "http://localhost:3000";
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const Admin = () => {
  const [patients, setPatients] = useState([])
  const [services, setServices] = useState([])

  const classes = useStyles();

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
      console.log('patients are', patients)
    })
    .catch(console.error) }

    const getServicesByPatient = async (id) => {
      await fetch(`${BASE_URL}/api/patient/${id}`, { //patient id route goes here
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(result => {
        setServices(result)
        console.log('patient services are', services)
      })
      .catch(console.error) }

  useEffect(() => {
    getPatients()
  }, []); 

    return (
      <div className={classes.root}>
      <h3>Active Patients</h3>
        {patients.map((patient, idx) => 
        <Card>
          <div className="adminBox">
            {/* need to tie patient service id with patient id to get time in and math that out for wait time */}
            
            <p idx={idx}>{patient.lastName}, {patient.firstName}  patient Id is {patient.id}</p>
          </div>
        </Card>
        )}
        <h3>Active Services</h3>
        {services.map((service, idx) => 
        <Card>
          <div className={classes.root}>
            
            <p idx={idx}>{service.serviceName}, {service.id}</p>
          </div>
        </Card>
        )}  
      </div>
    )
        }

export default Admin;