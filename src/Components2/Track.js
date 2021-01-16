import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom'


export const Track = () => {
    return (
        <div className="xyz">
            <h3 className="to">TRACKING IMY ORDER</h3>
            <ReactBootStrap.Form>
            <ReactBootStrap.Form.Text className="text-muted1">
            Please enter the required information below to track your order status.
    </ReactBootStrap.Form.Text>
  <ReactBootStrap.Form.Group controlId="formBasicEmail">
   <h4 className="on"> <ReactBootStrap.Form.Label>Order Number</ReactBootStrap.Form.Label></h4>
    <ReactBootStrap.Form.Control type="email"  placeholder="Enter Order Number"/>
  </ReactBootStrap.Form.Group>
  <ReactBootStrap.Button variant="secondary" type="submit">
    TRACK ORDER
  </ReactBootStrap.Button>
  </ReactBootStrap.Form>

  <hr/>
        </div>
    )
}
