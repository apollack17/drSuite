import { Component } from 'react'
import TextField from '@material-ui/core/TextField';


export class AddressInfo extends Component {
  render() {
    const { values, handleChange } = this.props;
    
    return (
      <>
        <TextField 
          id="inputStreet"
          type="text"
          label="Street Address"
          onChange={handleChange('street')}
          defaultValue={values.street}
          variant="outlined"
          autoFocus={true}
          required={true}
          />
          <TextField 
          id="inputCity"
          type="text"
          label="City"
          onChange={handleChange('city')}
          defaultValue={values.city}
          variant="outlined"
          autoFocus={true}
          required={true}
          />
          <TextField 
          id="inputState"
          type="text"
          label="State"
          onChange={handleChange('state')}
          defaultValue={values.state}
          variant="outlined"
          autoFocus={true}
          required={true}
          />
          <TextField 
          id="inputZipcode"
          type="text"
          label="zipcode"
          onChange={handleChange('zidpcode')}
          defaultValue={values.zipcode}
          variant="outlined"
          autoFocus={true}
          required={true}
          />
          <h2>{values.street} {values.state} {values.zipcode}</h2>
      </>
    )
  }
}

export default AddressInfo
