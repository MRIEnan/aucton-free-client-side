import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import useAuth from '../../Shared/Authentication/Hook/useAuth';
import logo from '../../Shared/image/Free_Sample_By_Wix.jfif';

const BookmakerNav = () => {
  const {allContext}=useAuth()
  const { user, logout } = allContext;
  const navigate = useNavigate();
     
  const LogOutHandler = () => {
      logout(navigate)
  }
    return (
      <div className="sticky-top">
      <Navbar style={{backgroundColor:'#020c53'}} variant="dark" expand="lg">
          <Container>
          <Navbar.Brand className='fw-bold'>BookMaker DashBoard</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto align-items-center">
                      <Nav.Link as={Link} to='/'>User Home</Nav.Link>
                      {user.email ? (
                          <>
                          <button style={{backgroundColor:'#020c53'}} onClick={LogOutHandler} className="text-center btn btn-primary">
                              Log Out
                          </button>
                          </>
                      ) : (
                          <>
                              ''
                          </>
                      )}
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  </div>
    );
};

export default BookmakerNav;