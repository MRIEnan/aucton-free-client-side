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
              <h4 className='text-warning fw-bold'>Last Date {lastdate}</h4>
            <h4>Bid Start From ${bidprice}</h4>
          </Card.Text>
          <Card.Footer className="text-muted">
            Publishdate {publishdate}
          </Card.Footer>
          <Link to={`/BidDetails/${_id}`}><button className='btn regularbtn fw-bold text-warning'>Bid Now</button></Link>
        </Card.Body>
          </Card>
        </Col>
    );
};

export default Aucntion;