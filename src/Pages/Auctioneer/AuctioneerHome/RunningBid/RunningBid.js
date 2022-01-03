import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { BiData} from 'react-icons/bi';
import { BsHammer} from 'react-icons/bs';

const RunningBid = (props) => {
    const { img, title, currentBid, cost,id,time } = props.service;
    return (
        <div>

            <div className="service-container">
                <Container>
                   
                    <Row>
                        <Col sm={12} md={4}>
                            <Card sm={2} md={3} className="cart" style={{ width: '18rem' }}>
                                <Card.Img variant="top mx-auto" src={img} />
                                <Card.Body>
                                    <Card.Title>
                                        <h3 className="title">{title}</h3>
                                        
                                    </Card.Title>
                                    <Card.Text>
                                        <p style={{fontWeight:'600'}}>Bid ID: {id}</p>
                                        {/* <p className="detail">Current Bid: {currentBid}</p> */}
                                        <p className="detail" style={{ fontWeight: '600' }}>
                                            <BsHammer style={{ color: 'goldenRod' }}></BsHammer>  Current Bids:{cost} <BiData style={{ color: 'goldenRod' }}></BiData></p>
                                        <p>{time}-25 Bids</p> 
                                    </Card.Text>
                                    <Button
                                    >Submit a Bid</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                       
                    </Row>

                    
                </Container>
               

            </div>
        </div>
    );
};

export default RunningBid;