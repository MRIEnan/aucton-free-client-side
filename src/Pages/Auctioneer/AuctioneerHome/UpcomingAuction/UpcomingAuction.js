import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import watch from '../../../../images/Upcoming Auction/watch.jpg';

import './Upcoming.css'

const UpcomingAuction = () => {
    return (
        <div >
            <Container >
               

                <h1 style={{ color:'rgb(7, 92, 78)',marginBottom:'40px'}}>UpComing Auctions</h1>
                <Row className='container'>
                    <Col sm={12} md={6}>
                        <div class="card mb-3" style={{ maxWidth: '540px' }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={watch} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h4 class="card-title">Xiaomi Amazfit A1919D Touch Screen Display Smart Watch </h4>
                                        <div className='border mt-5 rounded-pill'>
                                            <p class="card-text">Current Bid: $100.9</p>
                                            <p class="card-text">05:16:20: waiting for bid</p>
                                        </div>
                                        
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div class="card mb-3" style={{ maxWidth: '540px' }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={watch} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h4 class="card-title">Xiaomi Amazfit A1919D Touch Screen Display Smart Watch </h4>
                                        <div className='border mt-5 rounded-pill'>
                                            <p class="card-text">Current Bid: $100.9</p>
                                            <p class="card-text">05:16:20: waiting for bid</p>
                                        </div>
                                        
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div class="card mb-3" style={{ maxWidth: '540px' }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={watch} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h4 class="card-title">Xiaomi Amazfit A1919D Touch Screen Display Smart Watch </h4>
                                        <div className='border mt-5 rounded-pill'>
                                            <p class="card-text">Current Bid: $100.9</p>
                                            <p class="card-text">05:16:20: waiting for bid</p>
                                        </div>
                                        
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div class="card mb-3" style={{ maxWidth: '540px' }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={watch} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h4 class="card-title">Xiaomi Amazfit A1919D Touch Screen Display Smart Watch </h4>
                                        <div className='border mt-5 rounded-pill'>
                                            <p class="card-text">Current Bid: $100.9</p>
                                            <p class="card-text">05:16:20: waiting for bid</p>
                                        </div>
                                        
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                   
                </Row>
            </Container>
            
        </div>
    );
};

export default UpcomingAuction;