import { Component } from 'react'
import { Button, List, ListItemText, ListItem, Card, CardContent } from '@material-ui/core' 



  
export class ConfirmationInfo extends Component {
  continue = e => {
    e.preventDefault();
    
    this.props.nextStep();
  }
  render() {
    const {values: {firstName, middleInitial, lastName, street, city, state, zipcode, phoneNumber, email, dob, ssn}} = this.props;
    return (
      <div>
        <h3>Please confirm that the following information is correct.</h3>
        <div>
          <List>
            <ListItem>
            <ListItemText primary='First Name' />
                {firstName}
              </ListItem>
              <ListItem>
              <ListItemText primary='Middle Initial' />
                {middleInitial}
              </ListItem>

              <ListItem>
              <ListItemText primary='Last Name' />
                {lastName}
              </ListItem>

              <ListItem>
              <ListItemText primary='Street' />
                {street}
              </ListItem>
              <ListItem>
              <ListItemText primary='City' />
                {city}
              </ListItem>
              <ListItem>
              <ListItemText primary='State' />
                {state}
              </ListItem>
              <ListItem>
              <ListItemText primary='zipcode' />
                {zipcode}
              </ListItem>
              <ListItem>
              <ListItemText primary='Phone Number' />
                {phoneNumber}
              </ListItem>
              <ListItem>
              <ListItemText primary='Email' />
                {email}
              </ListItem>
              <ListItem>
              <ListItemText primary='Date of Birth' />
                {dob}
              </ListItem>
              <ListItem>
              <ListItemText primary='Social Security Number' />
                {ssn}
              </ListItem>
          </List>
        </div>
      </div>
    )
  }
}

export default ConfirmationInfo
