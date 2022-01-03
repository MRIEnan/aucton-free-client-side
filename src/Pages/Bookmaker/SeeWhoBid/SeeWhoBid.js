import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import { GetBidDetails } from '../../../features/AuctionSlice/AuctionSlice';

const SeeWhoBid = () => {
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(() => {
        dispatch(GetBidDetails(id))
    },[dispatch,id]);
    const product = useSelector((state) => state.auctionstore.auctionproduct);

    const bidarrays = product.bidarray && JSON.parse(product?.bidarray);

    console.log(product)
    return (
        <Row className='container-fluid'>
            <h1 className='text-cener fw-bold'>Your Product Biding Situation</h1>
            <Row className='justify-content-center'>
            <Col lg={6} md={6} sm={12}>
            <img className='auctionimg' src={`data:image/jpeg;base64,${product.img}`} alt="" />
                <h3>{product.productname}</h3>
                <h4>$ {product.bidprice}</h4>
                <h5>Last Date {product.lastdate}</h5>
                <p>{product.description}</p>
            </Col>
            <Col lg={6} md={6} sm={12}>
            {
                bidarrays?.map(bid =>
                <Col className="my-4" lg={12} sm={12} md={12}>
                    <h4>{bid?.username}</h4>
                    <h4> {bid?.bidamount &&  <>$ {bid?.bidamount}</>}</h4>
                    <h4>{bid?.biddate}</h4>
                    {bid?.username && <button onClick={() => console.log(bid?.email)} className='btn btn-success fw-bold text-light'>MAKE WINNER</button>}
                </Col>)
                }
                
            </Col>
            </Row>
        </Row>
    );
};

export default SeeWhoBid;