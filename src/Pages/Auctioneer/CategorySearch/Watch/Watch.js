import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetCategoryData } from '../../../../features/AuctionSlice/AuctionSlice';
import AuctioneerNav from '../../AuctioneerHome/AuctioneerNav';
const Watch = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetCategoryData('watch'))
    },[dispatch]);

    const categorydata = useSelector((state) => state.auctionstore.categorydata);

    return (
        <div className='container-fluid'>
            <AuctioneerNav></AuctioneerNav>
            <Row className='justify-content-center'>
                {
                    categorydata.map(data => 
                        
                        <Col lg={4} md={6} sm={12}>
                        <Card>
                      <Card.Img variant="top" className='auctionimg' src={`data:image/jpeg;base64,${data.img}`} />
                      <Card.Body>
                        <Card.Title>{data.productname}</Card.Title>
                        <Card.Text>
                            <h2 className='text-primary'>Last Date {data.lastdate}</h2>
                          <h4>Bid Start From ${data.bidprice}</h4>
                        </Card.Text>
                        <Card.Footer className="text-muted">
                          Publishdate {data.publishdate}
                        </Card.Footer>
                        <Link to={`/BidDetails/${data._id}`}><button className='btn btn-warning fw-bold text-dark'>Bid Now</button></Link>
                      </Card.Body>
                        </Card>
                      </Col>
                        
                        )
                }
            </Row>
        </div>
    );
};

export default Watch;