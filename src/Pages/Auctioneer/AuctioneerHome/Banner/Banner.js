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
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate explicabo amet consectetur, adipisicing elit. </p>
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
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate explicabo amet consectetur, adipisicing elit. </p>
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
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate explicabo amet consectetur, adipisicing elit. </p>
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