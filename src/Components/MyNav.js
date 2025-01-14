import { Navbar, Nav, Container, Form, ToggleButton, ButtonGroup  } from 'react-bootstrap'
import {  Link } from 'react-router-dom'
import {ThemeContext,} from '../Context';
import { useState, useContext } from "react";

const MyNav = ({ searchQuery, setSearchQuery,  toggleTheme }) => {
  const [checked, setChecked] = useState(false);
  const theme = useContext(ThemeContext);
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary mb-3"
      bg="dark"
      data-bs-theme={theme}
    >
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>EpicBooks</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <div className="nav-link">Home</div>
            </Link>
            <Link to="/about">
              <div className="nav-link">About</div>
            </Link>
            <Link to="/browse">
              <div className="nav-link">Browse</div>
            </Link>
            <ButtonGroup>
              <ToggleButton
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                checked={checked}
                value="1"
                onChange={(e) => {
                  toggleTheme();
                  setChecked(e.currentTarget.checked);
                }}
              >
                {checked ? "Light" : "Dark"}
              </ToggleButton>
            </ButtonGroup>
          </Nav>
          <Nav className="ms-auto">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Search a book"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
