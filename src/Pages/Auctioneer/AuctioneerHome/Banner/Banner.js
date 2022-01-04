import React from 'react';
import './Banner.css'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';

import watch from '../../../../images/Banner/watch.png';
import camera1 from '../../../../images/Banner/camera 1.png';
import car from '../../../../images/Banner/car.png';

const Banner = () => {
    return (
        <>
            <Carousel className="banner-container mx-auto ps-5 ">
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col sm={6} className="d-flex align-items-center ">
                                <div className=" text-start ps-5">
                                    <h1>The Xa-023 <br />
                                        New Products 2022</h1>
                                    <p>smartwatch, a small smartphonelike device worn on the wrist. Many smartwatches are connected to a smartphone that notifies the user of incoming calls, e-mail messages</p>
                                    <br />
                                    <Button variant="dark">Bid Now</Button>
                                </div>
                               
                            </Col>
                            <Col sm={6} >
                                <img className='img' src={watch} alt="" />
                            </Col>
                        </Row>

                    </Container>
                   
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col sm={6} className="d-flex align-items-center ">
                                <div className=" text-start ps-5">
                                    <h1>The Canon-EOS <br />
                                        New Products 2022</h1>
                                    <p>Entry-level DSLR cameras, such as Canon's EOS Rebel series, are known for producing sharp, professional-grade images and videos. ... These cameras are also great for students, families, and casual photographers who prefer the option of using interchangeable lenses to capture the perfect shot. </p>
                                    <br />
                                    <Button variant="dark">Bid Now</Button>
                                </div>
                               
                            </Col>
                            <Col sm={6} className='' style={{paddingRight:'200px'}}>
                                <img className='img ' src={camera1} alt="" />
                            </Col>
                        </Row>

                    </Container>
                   
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col sm={12} md={6} className="d-flex align-items-center ">
                                <div className=" text-start ps-5">
                                    <h1>The Mustang-GT <br />
                                        New Products 2022</h1>
                                    <p> Mustang has a top speed of 186 mph, and it does 0-60 mph in 3.3 seconds. The Shelby GT500 also does a quarter-mile time of 10.7 seconds and at a speed of 132</p>
                                    <br />
                                    <Button variant="dark">Bid Now</Button>
                                </div>
                               
                            </Col>
                            <Col sm={12} md={6} className='' >
                                <img style={{ padding: '60px' }} className='img ' src={car} alt="" />
                            </Col>
                        </Row>

                    </Container>
                   
                </Carousel.Item>
                

            </Carousel>
        </>
    );
};

export default Banner;