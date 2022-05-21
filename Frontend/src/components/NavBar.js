import React from 'react'
import { Navbar,Container,DropdownButton,Dropdown } from 'react-bootstrap'



export default function NavBar(props) {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
            <Container>
              {/* Navbar title */}
                <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
      <Navbar.Brand > 
        {/* User Name */}
        {props.user}
      </Navbar.Brand>

      {/* DropDown in the NavBar  for Home btn and Logout btn*/}
      <DropdownButton drop='start' size="sm" id="dropdown-basic-button" variant= "outline-light" title="">
                            <Dropdown.Item href="/dashboard">Home</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/">Logout</Dropdown.Item>
                        </DropdownButton>
    </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
