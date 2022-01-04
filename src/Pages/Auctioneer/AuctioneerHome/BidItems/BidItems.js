import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './BidItems.css'
import furniturelogo from '../../../../images/furniturelogo.jpg';
import electronicslogo from '../../../../images/electronicslogo.jpg';
import { useNavigate } from 'react-router-dom';

const BidItems = () => {
    const navigate = useNavigate()
    const CateGoryHandler = (category) => {
        navigate(category)
    }
    return (
        <div className="container-fluid">
            <h1 className='text-center fw-bold my-4'>Choose Your Auction Category</h1>
            <Row className='justify-content-center'>
                <Col onClick={() => CateGoryHandler('/Jewelry')}  style={{ width: '11rem', height: '12.5rem' }} sm={6} md={2} className='g-1 card categorycolam'>    
                        
                    <Card.Header style={{ fontWeight: '600' }}>JEWELARY</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top p-4" src={'http://pixner.net/sbidu/main/assets/images/auction/02.png'} />
                            
                        </Card.Body>
                </Col>
                <Col onClick={() => CateGoryHandler('/Electronics')}  style={{ width: '11rem', height: '12.5rem' }} sm={6} md={2} className='g-1 card categorycolam'>
                    
                    <Card.Header style={{ fontWeight: '600' }}>ELECTRONICS</Card.Header>
                        <Card.Body>
                            <Card.Img className='img-fluid' variant="top p-4" src={electronicslogo} />
                            
                        </Card.Body>
                    
                </Col>

                <Col onClick={() => CateGoryHandler('/Vehicles')}  style={{ width: '11rem', height: '12.5rem' }} sm={6} md={2} className='g-1 card categorycolam'>
                    
                    <Card.Header style={{ fontWeight: '600' }}>VEHICLES</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top p-4" src={'http://pixner.net/sbidu/main/assets/images/auction/01.png'} />
                            
                        </Card.Body>
                    
                </Col>
                <Col onClick={() => CateGoryHandler('/Watch')}  style={{ width: '11rem', height: '12.5rem' }} sm={6} md={2} className='g-1 card categorycolam'>
                    
                    <Card.Header style={{ fontWeight: '600' }}>WATCH</Card.Header>
                    <Card.Body >
                        <Card.Img variant="top p-4" src={'http://pixner.net/sbidu/main/assets/images/auction/03.png'} />
                        
                    </Card.Body>
                </Col>
                <Col onClick={() => CateGoryHandler('/Furniture')}  style={{ width: '11rem', height: '12.5rem' }} sm={6} md={2} className='g-1 card categorycolam'>
                    
                    <Card.Header style={{ fontWeight: '600' }}>FURNITURE</Card.Header>
                        <Card.Body>
                            <Card.Img className='img-fluid' variant="top p-4" src={furniturelogo} />
                            
                        </Card.Body>
                </Col> 
            </Row>
        </div>
    );
};

export default BidItems;