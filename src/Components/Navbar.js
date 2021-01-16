import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
  
    <div style={{backgroundColor:"#f3f3f3"}} >

<ReactBootStrap.Navbar collapseOnSelect expand="lg"  >
  <Link to="/"><ReactBootStrap.Navbar.Brand href="#home">WELCOME TO J.</ReactBootStrap.Navbar.Brand></Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#features"><Link to="/Signin">SIGN IN</Link></ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing"><Link to="/Track">TRACKING INFO</Link></ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing"><Link to="/Catalogue">CATALOGUE</Link></ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="PKR" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">AUD</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">GBP</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">CAD</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
    <ReactBootStrap.Form inline>
      <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootStrap.Button variant="light" ><Link to="/Women">Search</Link></ReactBootStrap.Button>
    </ReactBootStrap.Form>

  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
      
    </div>
  )
}


