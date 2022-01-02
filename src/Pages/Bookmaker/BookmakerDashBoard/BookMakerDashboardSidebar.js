import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const BookMakerDashboardSidebar = () => {
    return (
        <ListGroup>
            <ListGroup.Item as={Link} to="/BookMakerDashboard" action variant="secondary">
                Home
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/BookMakerDashboard/AddAuction" action variant="success">
                Add Auction
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/BookMakerDashboard/ManageAuction" action variant="success">
                Manage Auction
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/BookMakerDashboard/SeeWhoBid" action variant="success">
                See Who Bid
            </ListGroup.Item>
      </ListGroup>
    );
};

export default BookMakerDashboardSidebar;