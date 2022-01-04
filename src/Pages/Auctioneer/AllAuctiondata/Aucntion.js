import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Aucntion = ({auction}) => {
    const {_id,img, productname, bidprice, lastdate, publishdate} = auction
    return (
        <Col lg={4} md={6} sm={12}>
          <Card>
        <Card.Img variant="top" className='auctionimg' src={`data:image/jpeg;base64,${img}`} />
        <Card.Body>
          <Card.Title>{productname}</Card.Title>
          <Card.Text>
              <h2 className='text-primary'>Last Date {lastdate}</h2>
            <h4>Bid Start From ${bidprice}</h4>
          </Card.Text>
          <Card.Footer className="text-muted">
            Publishdate {publishdate}
          </Card.Footer>
          <Link to={`/BidDetails/${_id}`}><button className='btn btn-warning fw-bold text-dark'>Bid Now</button></Link>
        </Card.Body>
          </Card>
        </Col>
    );
};

export default Aucntion;