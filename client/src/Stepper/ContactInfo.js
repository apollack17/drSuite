import { Component } from 'react'
import TextField from '@material-ui/core/TextField';


export class ContactInfo extends Component {
  render() {
    const { values, handleChange } = this.props;
    
    return (
      <>
        <TextField 
          id="inputPhone"
          type="number"
          label="Phone Number"
          onChange={handleChange('phoneNumber')}
          defaultValue={values.phoneNumber}
          variant="outlined"
          autoFocus={true}
          required={true}
          />
          <TextField 
          id="inputEmail"
          type="text"
          label="email"
          onChange={handleChange('email')}
          defaultValue={values.email}
          variant="outlined"
          autoFocus={true}
          required={true}
          />
          <h2>{values.phoneNumber} {values.email}</h2>
      </>
    )
  }
}

export default ContactInfo
