import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Login.css'
import { Alert, Button, Col, Container, Form, FormControl, InputGroup, Nav, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../image/login.jpg'
import useAuth from '../Authentication/Hook/useAuth';
import AuctioneerNav from '../../Auctioneer/AuctioneerHome/AuctioneerNav';
const Login = () => {

    const [loginData, setLoginData] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { allContext } = useAuth()
    const { user, isLoading, error, loginUser, signInWithGoogle } = allContext;
    console.log(loginData);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(value)
        const newLoginData = { ...loginData };

        newLoginData[field] = value;
        setLoginData(newLoginData);


    }
    const handleLogInSubmit = e => {
        loginUser(loginData?.email, loginData?.password, location, navigate)
        e.preventDefault();
    }

    return (
        <div className="container-fluid">
            <AuctioneerNav></AuctioneerNav>
            <Container>

                {isLoading ? <>
                    <Button className='my-5' variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">Loading...</span>
                    </Button>{' '}
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                </>:

                <Row xs={1} md={2}>

                    <Col >
                        <img className='img-fluid' src={login}>

                        </img>
                    </Col>
                    <Col className='mt-md-5 pt-md-5'>



                        <h2 className='brand-title'>Please Login</h2>
                        <p className=" mt-2 text-warning">Login with Email & Password</p>
                        <p className="text-danger text-center"></p>
                        <p className="text-danger text-center">{error}</p>



                        <Form className=''
                            onSubmit={handleLogInSubmit}
                        >
                            <Row>
                                <Col className="text-start inputs">
                                    <Form.Label htmlFor="email" className='label' visuallyHidden>
                                        Your Email Address
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                        </InputGroup.Text>
                                        <FormControl
                                            onBlur={handleOnBlur}
                                            type="email"
                                            name='email'
                                            autoComplete="current-email"
                                            id="email"
                                            placeholder="Enter your email address"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col className="text-start">
                                    <Form.Label htmlFor="password" visuallyHidden>
                                        Your Password
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                        </InputGroup.Text>
                                        <FormControl
                                            onBlur={handleOnBlur}
                                            type="password"
                                            name='password'
                                            autoComplete="current-password"
                                            id="password"
                                            placeholder="Enter your password"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <button type="submit" className="buttons mt-2 w-100">
                                Login
                            </button>
                        </Form>




                        {/* <div class="container">
                            <div class="brand-logo"></div>
                            <div class="brand-title">TWITTER</div>
                            <div class="inputs">
                                <label>EMAIL</label>
                                <input type="email" placeholder="example@test.com" />
                                <label>PASSWORD</label>
                                <input type="password" placeholder="Min 6 charaters long" />
                                <button className='buttons' type="submit">LOGIN</button>
                            </div>
                          
                        </div> */}
                        <p>
                            --------------------------------

                        </p>
                        <Nav.Link className='text-warning' as={Link} to='/signup'>Don't have an account? please register</Nav.Link>
                        <p className='brand-title'>SignUp with google</p>
                        <Button className="text-warning" style={{ backgroundColor: '#f1f1f1' }} onClick={() => signInWithGoogle(location, navigate)}>SignUp With </Button>
                        {user?.email && <Alert variant='success' className='w-25 mx-auto ' >
                            Login successfully
                        </Alert>}



                    </Col>


                </Row>
}

            </Container>
        </div>
    );
};

export default Login;