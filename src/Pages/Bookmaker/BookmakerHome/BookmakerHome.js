import React from 'react';
import {Col, Row} from 'react-bootstrap';
import bookmakerimg from '../../../images/book maker banner.jpg'
const BookmakerHome = () => {
    return (
        <Row className='container-fluid'>
        <h1 className='fw-bold title text-center my-4'>Book Maker DashBoard</h1>
        <Row className='d-flex justify-content-center align-items-center'>
            <Col lg={10} sm={12} md={12}>
                <img className='img-fluid' src={bookmakerimg} alt="" />
            </Col>
        </Row>
        </Row>
    );
};

export default BookmakerHome;