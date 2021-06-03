import { Component } from 'react'
import { PatientInfo, AddressInfo, ContactInfo, PersonalInfo, ConfirmationInfo } from '../Stepper'
import { Button } from '@material-ui/core/'
import { checkinPatient } from './index'
const BASE_URL = "http://localhost:3001"

export class StepperControl extends Component {

  state = {
    step: 1, 
    firstName: '',
    middleInitial: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    email: '',
    phone: '',
    dob: '',
    ssn: ''
  }

  //proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  //go back a step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  //handle fields change
  handleChange = input => e => {
    e.preventDefault();
    this.setState({[input]: e.target.value});
    //checkinpatient is scoped wrong. I either need to move it out or call handlechange
  
  
  }

  render() {
    const{ step, firstName, middleInitial, lastName, street, city, state, zipcode, email, phone, dob, ssn } = this.state;
    const values = { firstName, middleInitial, lastName, street, city, state, zipcode, email, phone, dob, ssn };

    switch(step) {
      case 1: 
        return (
          <div>
          <PatientInfo 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
          <Button onClick={this.nextStep} variant="contained" value="next" > next </Button>
          <Button onClick={this.prevStep} variant="contained" value="previous" > prev </Button>
          </div>
        )
      case 2:
        return (
        <div>
          <AddressInfo 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        <Button onClick={this.nextStep} variant="contained" value="next" > next </Button>
        <Button onClick={this.prevStep} variant="contained" value="previous" > prev </Button>
        </div>
      )
      case 3: 
        return (<div>
          <ContactInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        <Button onClick={this.nextStep} variant="contained" value="next" > next </Button>
        <Button onClick={this.prevStep} variant="contained" value="previous" > prev </Button>
        </div>)
      case 4: 
      return (<div>
        <PersonalInfo
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
      <Button onClick={this.nextStep} variant="contained" value="next" > next </Button>
      <Button onClick={this.prevStep} variant="contained" value="previous" > prev </Button>
      </div>)
      case 5: 
        return (
        <div>  <ConfirmationInfo
          nextStep={this.nextStep}
          values={values}
        />
      
      <Button onClick={() => checkinPatient(firstName, lastName, middleInitial, street, city, state, zipcode, dob, ssn)} variant="contained" value="next" > Confirm and Submit </Button>
      <Button onClick={this.prevStep} variant="contained" value="previous" > prev </Button>
      </div>)
      case 6: 
        return (<div><h2>Success</h2><Button onClick={this.nextStep} variant="contained" value="next" > next </Button>
        <Button onClick={this.prevStep} variant="contained" value="previous" > prev </Button></div>)
    }
      <div>

      </div>
    
  }
}

export default StepperControl
