import React from 'react';
import { Card, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Manage = ({auction, DeleteHandler,StatusHandler}) => {
    const {_id,img,status, productname, bidprice, lastdate, publishdate} = auction

    return (
        <Col lg={4} md={6} sm={12}>
        <Card>
      <Card.Img variant="top" className='auctionimg' src={`data:image/jpeg;base64,${img}`} />
      <Card.Body>
        <Card.Title>{productname}</Card.Title>
        <Card.Text>
            <h2 className='text-primary'>Last Date {lastdate}</h2>
          <h4>Bid Start From ${bidprice}</h4>
          <p className={status === 'open' ? 'text-success' : 'text-warning'}>{status}</p>
        </Card.Text>
        <Card.Footer className="text-muted">
          Publishdate {publishdate}
        </Card.Footer>
        <button onClick={() => DeleteHandler(_id)}  className='btn btn-danger fw-bold text-dark'>DELETE</button>
        <Link to={`/BookMakerDashboard/SeeWhoBid/${_id}`}><button className='btn btn-warning mx-2'>SEE WHO BID</button></Link>
        <button onClick={() => StatusHandler(_id)}  className='btn btn-info fw-bold text-dark'>CLOSE AUCTION</button>
      </Card.Body>
    </Card>
      </Col>
    );
};

export default Manage;