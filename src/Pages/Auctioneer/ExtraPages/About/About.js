import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import aboutPic from '../../../images/About/about-pic.jpg';
// import team from '../../../images/About/team.png';
import { BsArrowReturnRight } from 'react-icons/bs';
import './About.css'
import TeamMamber from '../TeamMamber/TeamMamber';
import AuctioneerNav from '../../AuctioneerHome/AuctioneerNav';
const About = () => {
    return (
        <div id="about" className="about-title-container container-fluid">
            <AuctioneerNav></AuctioneerNav>
            <h1 style={{ color: 'rgb(7, 92, 78)', marginTop: '40px' }}>About Us_</h1>
            <Row className="about-container mx-auto mt-3">
                <Container>
                    <Row>

                        <Col className="mt-5" sm={6}>
                            <img style={{height:'250px'}} className="img" src='https://i.ibb.co/82bhn12/Auction-online-vector-illustration-Isometric-smartphone-auctioneer-and-finger-tapping-bid-button-on.jpg' alt="" />
                            <br />
                            
                        
                                
                         
                        </Col>
                        <Col sm={6} className='text-start'>
                            <h5>The Auction Platfrom for any individual products,stationary,devices.</h5>
                            <p className="detail">Greater Giving works exclusively with schools and nonprofits across the nation—offering integrated technologies to help simplify event management, quickly train volunteers, streamline check-in and check-out and raise more funds.</p>
                            <div className='d-flex'>
                                <p>
                                    < BsArrowReturnRight></BsArrowReturnRight> Unlimited Events <br />
                                    < BsArrowReturnRight></BsArrowReturnRight> Secure and Reliable <br />
                                    {/* < BsArrowReturnRight></BsArrowReturnRight> Unlimited Support<br />
                                    < BsArrowReturnRight></BsArrowReturnRight> Process Credit Cards <br /> */}


                                </p>
                                <div className='d-flex'>
                                   
                                    <div className='d-flex '>
                                        <img className=' border border-warning rounded-circle ' style={{ width: '50px' ,height:'50px',marginLeft:'60px'}} src='https://i.ibb.co/qWs2xDx/team.png' alt="" />
                                        <div>
                                            <h6>Team-100</h6>
                                            <p>CEO Auction Lab</p>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                            <Button variant="dark">More details</Button>
                            
                           
                            </Col>
                    </Row>

                </Container>
            </Row >
            <TeamMamber></TeamMamber>
        </div>
    );
};

export default About;