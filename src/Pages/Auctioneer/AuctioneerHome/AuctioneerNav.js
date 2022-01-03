import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Shared/image/Free_Sample_By_Wix.jfif'
import useAuth from '../../Shared/Authentication/Hook/useAuth';

const AuctioneerNav = () => {
    const {allContext}=useAuth()
    const { user, logout } = allContext;
    // const { displayName, photoURL, email } = user;
    const navigate = useNavigate();
     
    const LogOutHandler = (navigate) => {
        logout(navigate)
    }
    return (
        <div className="sticky-top">
            <Navbar style={{backgroundColor:'#020c53'}} variant="dark" expand="lg">
                <Container>
                <Navbar.Brand className='' as={Link} to='/'>
                    <img
                        alt=""
                        src={logo}
                        width="150"
                        height="80"
                        className="d-inline-block align-top img-fluid"
                    />{''}
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto align-items-center">
                            <Nav.Link as={Link} to='/YourWinnigAuction'>YourWinnigAuction</Nav.Link>
                           
                        </Nav>
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/BookMakerDashboard'>Book Maker DashBoard</Nav.Link>
                            
                            {user.email ? (
                                <>
                                <button style={{backgroundColor:'#020c53'}} onClick={LogOutHandler} className="text-center btn btn-primary">
                                    Log Out
                                </button>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to='/login'>LogIn</Nav.Link>
                                    <Nav.Link as={Link} to='/signup'>SignUp</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default AuctioneerNav;