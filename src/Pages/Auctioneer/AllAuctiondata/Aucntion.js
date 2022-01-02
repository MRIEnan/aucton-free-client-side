import React from 'react';
import { Card } from 'react-bootstrap';

const Aucntion = ({auction}) => {
    const {img, productname, bidprice, lastdate, publishdate, description} = auction
    return (
        <Card>
        <Card.Img variant="top" className='auctionimg' src={`data:image/jpeg;base64,${img}`} />
        <Card.Body>
          <Card.Title>{productname}</Card.Title>
          <Card.Text>
              <h2 className='text-primary'>Last Date {lastdate}</h2>
            <h4>Bid Start From ${bidprice}</h4>
          </Card.Text>
          <Card.Footer className="text-muted">Publishdate {publishdate}</Card.Footer>
        </Card.Body>
      </Card>
    );
};

export default Aucntion;