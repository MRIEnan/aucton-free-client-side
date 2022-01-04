import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './BidItems.css'
import furniturelogo from '../../../../images/furniturelogo.jpg'
const BidItems = () => {
    return (
        <div>
            <Container className='container'>
                
                
                <Row>
                    <Col style={{ width: '11rem', height: '12.5rem' }} sm={6} md={2} className='g-1 card '>    
                         
                        <Card.Header style={{ fontWeight: '600' }}>JEWELARY</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top p-4" src={'http://pixner.net/sbidu/main/assets/images/auction/02.png'} />
                                
                            </Card.Body>
                    </Col>
                    <Col style={{ width: '11rem', height: '12.5rem' }} sm={6} md={2} className='g-1 card'>
                      
                        <Card.Header style={{ fontWeight: '600' }}>ELECTRONICS</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top p-4" src={'http://pixner.net/sbidu/main/assets/images/auction/04.png'} />
                                
                            </Card.Body>
                       
                    </Col>
                    <Col style={{ width: '11rem', height: '12.5rem' }} sm={6} md={2} className='g-1 card'>
                      
                        <Card.Header style={{ fontWeight: '600' }}>REAL STATE</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top p-4" src={'http://pixner.net/sbidu/main/assets/images/auction/06.png'} />
                               
                            </Card.Body>
                     
                    </Col>
                    <Col style={{ width: '11rem', height: '12.5rem' }} sm={6} md={2} className='g-1 card'>
                      
                        <Card.Header style={{ fontWeight: '600' }}>VEHICLES</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top p-4" src={'http://pixner.net/sbidu/main/assets/images/auction/01.png'} />
                                
                            </Card.Body>
                      
                    </Col>
                    <Col style={{ width: '11rem', height: '12.5rem' }} sm={6} md={2} className='g-1 card'>
                      
                        <Card.Header style={{ fontWeight: '600' }}>WATCH</Card.Header>
                        <Card.Body >
                            <Card.Img variant="top p-4" src={'http://pixner.net/sbidu/main/assets/images/auction/03.png'} />
                            
                        </Card.Body>
                    </Col>
                    
                    <Col style={{ width: '11rem', height: '12.5rem' }} sm={6} md={2} className='g-1 card'>
                        
                        <Card.Header style={{ fontWeight: '600' }}>SPORTS</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top p-4" src={'http://pixner.net/sbidu/main/assets/images/auction/05.png'} />
                                
                            </Card.Body>
                    </Col>
                    <Col style={{ width: '11rem', height: '12.5rem' }} sm={6} md={2} className='g-1 card'>
                        
                        <Card.Header style={{ fontWeight: '600' }}>FURNITURE</Card.Header>
                            <Card.Body>
                                <Card.Img className='img-fluid' variant="top p-4" src={furniturelogo} />
                                
                            </Card.Body>
                    </Col>
                   
                </Row>

            </Container>
        </div>
    );
};

export default BidItems;