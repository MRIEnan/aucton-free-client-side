import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetCategoryData } from '../../../../features/AuctionSlice/AuctionSlice';
import AuctioneerNav from '../../AuctioneerHome/AuctioneerNav';
import DashBoardProfile from '../../Timer/CountDown';
const Vehicles = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetCategoryData('vehicles'))
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
                        <h2 className='text-primary'> <DashBoardProfile dates={data.lastdate}></DashBoardProfile></h2>
                          <h4>Bid Start From ${data.bidprice}</h4>
                        </Card.Text>
                        <Card.Footer className="text-muted">
                          Publishdate {data.publishdate}
                        </Card.Footer>
                        <Link to={`/BidDetails/${data._id}`}><button className='btn regularbtn fw-bold text-light'>Bid Now</button></Link>
                      </Card.Body>
                        </Card>
                      </Col>
                        
                        )
                }
            </Row>
        </div>
    );
};

export default Vehicles;