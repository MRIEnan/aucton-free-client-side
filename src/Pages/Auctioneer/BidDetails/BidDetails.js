import React, { useEffect, useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { GetBidDetails, PostingBid } from '../../../features/AuctionSlice/AuctionSlice';

const BidDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [bid, setBid] = useState(0)
    useEffect(() => {
        dispatch(GetBidDetails(id))
    }, [id, dispatch]);

    const product = useSelector((state) => state.auctionstore.auctionproduct);

    const BidHandler = (e) => {
        e.preventDefault();
        if(bid > 550)
        {
            const newdata = {productId: id, bidamount: bid, username: 'ahan', email: 'ahan@gmail.com'};
            console.log(newdata)
            fetch('http://localhost:5000/postingBid', {
                method: 'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(newdata)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
        else{
            Swal.fire(
                'Your Amount is Lower Than BidAmount',
                '',
                'error'
              )
        }
    }
    return (
        <div className='container-fluid'>
            <Row className='justify-content-center'>
            <Col lg={6} md={6} sm={12}>
                <img className='auctionimg' src={`data:image/jpeg;base64,${product.img}`} alt="" />
                <h3>{product.productname}</h3>
                <h4>$ {product.bidprice}</h4>
                <h5>Last Date {product.lastdate}</h5>
                <p>{product.description}</p>
            </Col>
            <Col className='d-flex align-items-center ' lg={5} md={6} sm={12}>
            <Form onSubmit={BidHandler}>
                <FloatingLabel
                controlId="floatingInput"
                label="Your Amount"
                className="mb-3"
                >
                <Form.Control  onBlur={(e) => setBid(e.target.value)} type="number" placeholder="Your Amount" />
                </FloatingLabel>
                <button type='submit' className='btn btn-dark fw-bold text-warning p-2'>Bid</button>
            </Form>
            </Col>
            </Row>
        </div>
    );
};

export default BidDetails;