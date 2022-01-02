import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BookmakerNav from '../BookmakerHome/BookmakerNav';
import BookMakerDashboardSidebar from './BookMakerDashboardSidebar';
import {
    Outlet
   } from "react-router-dom";

const BookMakerDashboard = () => {
    return (
        <div className='container-fluid'>
            <BookmakerNav></BookmakerNav>
            <Row className='my-4'>
                <Col lg={2} md={3} sm={12}>
                    <BookMakerDashboardSidebar></BookMakerDashboardSidebar>
                </Col>
                <Col lg={10} md={9} sm={12}>
                    <Outlet/>
                </Col>
            </Row>
        </div>
    );
};

export default BookMakerDashboard;