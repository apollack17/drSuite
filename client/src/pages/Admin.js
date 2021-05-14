import {useState, useEffect} from 'react'


const BASE_URL = "http://localhost:3001";


const Admin = () => {
  const [patients, setPatients] = useState([])
  const [services, setServices] = useState([])
  

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

    const getServices = async () => {
      await fetch(`${BASE_URL}/api/services`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(result => {
        setServices(result)
        console.log('services are', services)
      })
      .catch(console.error) }
    
    

  useEffect(() => {
    getPatients()
    getServices()
  }, []); 

    return (
      <div className="adminContainer">
        {patients.map((patient, idx) => 
          <div className="adminBox">
            <h3>Patient Name</h3>
            <p idx={idx}>{patient.lastName}, {patient.firstName}</p>
          </div>
        )}
        {services.map((service, idx) => 
          <div className="adminBox">
            <h3>Active</h3>
            <p idx={idx}>{service.serviceName}, {service.id}</p>
          </div>
        )}  
      </div>
    )
        }

export default Admin;