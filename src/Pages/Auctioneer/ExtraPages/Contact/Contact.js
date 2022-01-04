import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Contact.css'


const Contact = () => {
    return (
        <div id="contact" className="contact-container">
            <h2 className="title mb-5 ">Contact Us</h2>
            <div >
                <Container>

                    <Row>
                        <Col sm className="col">
                            <h3>E-mail here</h3>
                            <p> team100@gmail.com</p>
                            <p>onlineauctionk@gmail.com</p>
                        </Col>
                        <Col sm className="col">
                            <h3>Location here</h3>
                            <p> 5th Ave Premium Area,Dhaka, BD</p>
                            <p>Mirpur,Dhaka</p>
                        </Col>
                        <Col sm className="col">
                            <h3>Call here</h3>
                            <p>+88012345635</p>
                            <p>+88987456546</p>
                        </Col>


                    </Row>
                    <Row>
                        <Col id="contact ">
                            <h1 style={{ fontSize: "2.6em", marginTop: 40, color: 'rgba(32, 194, 180, 0.829)' }}>Message Us_</h1>


                            <form action="https://formsubmit.co/robiulislamrbn@gmail.com" method="POST">


                                <input type="text" name="name" id="" placeholder="Name" required /><br />
                                <br />
                                <input type="email" name="email" id="" placeholder="Email" required /><br />
                                <input type="hidden" name="_captcha" value="false" />

                                <br />
                                <textarea type="textarea" name="message" id="" placeholder="Your Message" required /><br />



                                <br />



                                <Button className="btn btn-success" type="submit" style={{ float: 'center', color: 'white', fontWeight: 700, border: '2px solid khaki' }}>Send Message</Button>



                            </form>
                        </Col>
                      

                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default Contact;