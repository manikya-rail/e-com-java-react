import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Navbar1 = () => {
  const clientName = "clientName";

  const navbarTabs = ["Home", "About", "Product"];

  const dropdown = [
    {
      tab: "My Accounts",
      Menu: ["First", "Second"],
    },
    {
      tab: "Settings",
      Menu: ["First", "Second"],
    },
  ];

  const navColor='white';
  const navLinkColor='black'
  const navbarDisplay='';

  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className={`bg-${navColor} mb-3 shadow-sm`} style={{backgroundColor:navColor,display:navbarDisplay}}>
          <Container fluid>
            <Navbar.Brand href="#">{clientName}</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <div > {clientName}</div>   
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-info me-3" style={{color:navLinkColor}}>Search</Button>
                  </Form>
                  {navbarTabs.map((tab, index) => (
                    <Nav.Link key={index} href={`#${tab.toLowerCase()}`} style={{color:navLinkColor}}>
                      {tab}
                    </Nav.Link>
                  ))}
                  {dropdown.map((dropdownItem, index) => (
                    <NavDropdown
                    
                      key={index}      
                      title={<span style={{ color: navLinkColor }}>{dropdownItem.tab}</span>}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}

                    >
                      {dropdownItem.Menu.map((menuItem, index) => (
                        <NavDropdown.Item key={index} style={{color:navLinkColor}}>
                          {menuItem}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
