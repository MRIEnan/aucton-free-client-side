import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Register.css'

const Register = () => {
    return (
        <div >
            <Container>
               
               
                <Row className='register-container '>
                    <Col sm={12} md={6}>
                      <div className='text-start'>
                            <h1>Register For Free and Start <br />
                                Bidding NOW!
                            </h1>
                            <p>Froms car to diamonds to iPhones,we have it all.</p>
                      </div>
                        </Col>
                    <Col className="d-flex justify-content-center align-items-center " sm={12} md={6}><Button className='btn' variant="dark">Register</Button></Col>
                </Row>

               
            </Container>
        </div>
    );
};

export default Register;