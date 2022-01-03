import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetWinnerData } from '../../../features/AuctionSlice/AuctionSlice';
import useAuth from '../../Shared/Authentication/Hook/useAuth';
import AuctioneerNav from '../AuctioneerHome/AuctioneerNav'
const YourWinnigAuction = () => {
    const { allContext } = useAuth()
    const { user} = allContext;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetWinnerData(user.email))
    },[dispatch, user.email]);
    const winnerdata = useSelector((state) => state.auctionstore.winnerdata);
    console.log('winnerdata',winnerdata)
    return (
        <div className='container-fluid'>
            <AuctioneerNav></AuctioneerNav>
            {
                winnerdata  &&
                <>
                    {
                        winnerdata?.map(data =>
                        <Row className='justify-content-center'>
                            <h1 className='fw-bold text-center text-success'>Congratulation ! You Win The Auction</h1>
                            <Col lg={5} md={6} sm={12}>
                                <img className='auctionimg' src={`data:image/jpeg;base64,${data.img}`} alt="" />
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <h4>{data.productname}</h4>
                                <h4>Your Bid: ${data.bidamount}</h4>
                                <p>{data.description}</p>
                            </Col>
                        </Row>)
                    }
                </> 
            }
        </div>
    );
};

export default YourWinnigAuction;