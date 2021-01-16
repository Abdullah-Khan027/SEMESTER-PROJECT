import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom'


export const Signup = () => {
    return (

        <div className="sign">
            <h3 >CREATE NEW CUSTOMER ACCOUNT</h3>
            <hr/>
            <h3>Personal Information</h3>
            <hr/>
                      <ReactBootStrap.Form>

                      <ReactBootStrap.Form.Label>First Name</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="First Name" placeholder="Enter First Name" />

      <ReactBootStrap.Form.Label>Last Name</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="Last Name" placeholder="Enter Last Name" />

      <ReactBootStrap.Form.Label>City</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control />
  

    <ReactBootStrap.Form.Label>Address</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control placeholder="1234 Main St" />
  
    
  <ReactBootStrap.Form.Group controlId="formGridAddress2">
    <ReactBootStrap.Form.Label>Address 2</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control placeholder="Apartment, studio, or floor" />
  </ReactBootStrap.Form.Group>

  <ReactBootStrap.Form.Row>
    

      <ReactBootStrap.Form.Label>Marital Status</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control as="select" defaultValue="Choose..." placeholder="Select">
        <option>Married</option>
        <option>Single</option>
      </ReactBootStrap.Form.Control>

<div>

      <h3 className="t">Sign-in Information</h3>
            <hr/>
            
      <ReactBootStrap.Form.Label>Email</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="email" placeholder="Enter email" />
    

    
      <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="password" placeholder="Password" />

      <ReactBootStrap.Form.Label>Confirm Password</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="Confirm Password" placeholder="Confirm Password" />
   
   

      </div>

      </ReactBootStrap.Form.Row>

  <ReactBootStrap.Form.Group id="formGridCheckbox">
    <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
  </ReactBootStrap.Form.Group>
  
  <ReactBootStrap.Button variant="light" type="final">
  <Link to="/Final"> submit</Link>
  </ReactBootStrap.Button>


  </ReactBootStrap.Form>

  <hr/>

        </div>
        


    )
}
