import { Component } from 'react'
import TextField from '@material-ui/core/TextField';

export class PersonalInfo extends Component {
  render() {
    const { values, handleChange } = this.props;
    
    return (
      <>
        <TextField 
          id="inputDOB"
          type="text"
          label="Date of Birth"
          onChange={handleChange('dob')}
          defaultValue={values.dob}
          variant="outlined"
          autoFocus={true}
          required={false}
          />
        <TextField 
          id="inputSSN"
          type="number"
          label="Social Security Number"
          onChange={handleChange('ssn')}
          defaultValue={values.ssn}
          variant="outlined"
          autoFocus={true}
          required={true}
          />
          <h2>{values.ssn} {values.dob} </h2>
      </>
    )
  }
}

export default PersonalInfo
