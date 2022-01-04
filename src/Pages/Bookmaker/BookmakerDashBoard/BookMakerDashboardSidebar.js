import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const BookMakerDashboardSidebar = () => {
    return (
        <ListGroup>
            <ListGroup.Item as={Link} className='my-4 ' to="/BookMakerDashboard" action variant="secondary">
                <h5 className="sidebartext fw-bold">Home</h5>
            </ListGroup.Item>
            <ListGroup.Item as={Link} className='my-4 ' to="/BookMakerDashboard/AddAuction" action variant="success">
            <h5 className="sidebartext fw-bold">Add Auction</h5>
                
            </ListGroup.Item>
            <ListGroup.Item as={Link} className='my-4 ' to="/BookMakerDashboard/ManageAuction" action variant="success">
            <h5 className="sidebartext fw-bold">Manage Auction</h5>
                
            </ListGroup.Item>
            <ListGroup.Item as={Link} className='my-4 ' to="/BookMakerDashboard/MakeAnBookMaker" action variant="success">
            <h5 className="sidebartext fw-bold"> Make An Book Maker</h5>
               
            </ListGroup.Item>
      </ListGroup>
    );
};

export default BookMakerDashboardSidebar;