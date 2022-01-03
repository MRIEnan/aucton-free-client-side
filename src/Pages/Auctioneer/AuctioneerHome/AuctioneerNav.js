import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import logo from '../../Shared/image/Free_Sample_By_Wix.jfif'
import useAuth from '../../Shared/Authentication/Hook/useAuth';

const AuctioneerNav = () => {
    const {allContext}=useAuth()
    const { user, logout } = allContext;
    // const { displayName, photoURL, email } = user;

    return (
        <div className="sticky-top">
            <Navbar style={{backgroundColor:'#020c53'}} variant="dark" expand="lg">
                <Container>
                <Navbar.Brand className='' as={NavLink} to='/home'>
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
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/BookMakerDashboard'>Book Maker DashBoard</Nav.Link>
                            
                            {user.displayName ? (
                                <>
                                    <NavDropdown
                                        title={
                                            <>
                                                <img
                                                    style={{ width: "45px", borderRadius: "50%" }}
                                                    src={user.photoURL}
                                                    alt="profile"
                                                />
                                            </>
                                        }
                                    >
                                        <div className="text-center" style={{backgroundColor:'#020c53'}} >
                                        <Nav.Link as={NavLink} to='/dashboard'>DashBoard</Nav.Link>
                                            <div className="text-center">
                                                <button onClick={logout} className="btn btn-primary">
                                                    Log Out
                                                </button>
                                            </div>
                                        </div>
                                    </NavDropdown>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={NavLink} to='/login'>LogIn</Nav.Link>
                                    <Nav.Link as={NavLink} to='/signup'>SignUp</Nav.Link>
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