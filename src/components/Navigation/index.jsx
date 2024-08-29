import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// Bootstrap Component
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { VscTerminal } from "react-icons/vsc";
import { Button, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth';

class Navigation extends Component {
  
  handleLogout = () =>{
    this.props.dispatch(logoutUser());
    window.localStorage.removeItem('access');
    window.localStorage.removeItem('refresh');
    // window.location = '/'; 
  }

  render() {
    const {isLoggedIn} = this.props.auth;
    return (
      <Navbar expand="lg" className="bg-primary p-3">
        <Container fluid>
          <Navbar.Brand href="#" className="text-light"><VscTerminal size={30} className='me-2'></VscTerminal>THE DEVELOPER</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              navbarScroll
            >
              <Dropdown className="d-inline mx-2" autoClose="inside">
                <Dropdown.Toggle id="dropdown-autoclose-inside">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Action fsd fda</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action fs df s</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here afsd sdf</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated linkd as fdas </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              {!isLoggedIn ? (<div className="text-end">
                <Link to={'/login'} className="btn btn-outline-light me-2">
                  Login
                </Link>
                <Link to={"/sign-up"} className="btn btn-warning">
                  Sign-up
                </Link>
              </div>):(
                <>
                <Button className="btn btn-light" onClick={() => this.handleLogout()}>
                  Logout
                </Button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

function mapStateToProp(state){
  return{
    auth:state.auth, 
  }
}
const ConnectedNavigation = connect(mapStateToProp)(Navigation);
export default ConnectedNavigation;