import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetAcution } from '../../../features/AuctionSlice/AuctionSlice';
import Aucntion from './Aucntion';
import './Auctiondata.css'
const Allauctions = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAcution())
    },[dispatch])

    const auctiondata = useSelector((state) => state.auctionstore.auctiondata)

    return (
        <Row className="justify-content-center">
            {
                auctiondata?.map(auction => <Aucntion key={auction._id} auction={auction}></Aucntion>)
            }
        </Row>
    );
};

export default Allauctions;