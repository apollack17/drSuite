import { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { OutlinedInput } from '@material-ui/core';

export class PatientInfo extends Component {
  render() {
    const { values, handleChange } = this.props;
    
    return (
      <>
        <TextField 
          id="inputFN"
          type="text"
          label="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          variant="outlined"
          autoFocus={true}
          required={true}
        />
        <TextField 
          id="inputMI"
          type="text"
          label="Middle Initial"
          onChange={handleChange('middleInitial')}
          defaultValue={values.middleInitial}
          variant="outlined"
          autoFocus={true}
          required={false}
        />
        <TextField 
          id="inputLN"
          type="text"
          label="Last Name"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
          variant="outlined"
          autoFocus={true}
          required={true}
        />
      </>
    )
  }
}

export default PatientInfo
