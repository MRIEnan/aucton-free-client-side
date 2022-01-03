import React, { useEffect, useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { GetBidDetails } from '../../../features/AuctionSlice/AuctionSlice';

const BidDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [bid, setBid] = useState(0);
    const biddate = new Date().toLocaleDateString();
    const [demo, setDemo] = useState({});
    
    useEffect(() => {
        dispatch(GetBidDetails(id))
    }, [id, dispatch, demo]);

    const product = useSelector((state) => state.auctionstore.auctionproduct);
    console.log(product)
    const BidHandler = (e) => {
        e.preventDefault();
        if(parseInt(bid) > parseInt(product.bidprice))
        {
            const newdata = {biddate, productId: id, bidamount: bid, username: 'ahan', email: 'ahan@gmail.com'};
            console.log(newdata)
            fetch('http://localhost:5000/postingBid', {
                method: 'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(newdata)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDemo(product)
                e.target.reset()
            })
        }
        else{
            Swal.fire(
                'Your Amount is Lower Than BidAmount',
                '',
                'error'
              )
        }
    }
    const bidarrays = product.bidarray && JSON.parse(product?.bidarray)

    return (
        <div className='container-fluid'>
            <Row className='justify-content-center'>
            <Col lg={6} md={6} sm={12}>
                <img className='auctionimg' src={`data:image/jpeg;base64,${product.img}`} alt="" />
                <h3>{product.productname}</h3>
                <h4>$ {product.bidprice}</h4>
                <h5>Last Date {product.lastdate}</h5>
                <p className='text-primary fw-bold'>{product.status === 'open' && product.status}</p>
                <p>{product.description}</p>
            </Col>
            <Col className='align-items-center mt-4' lg={5} md={6} sm={12}>
                {
                    product.status === 'open' ?  <Form onSubmit={BidHandler}>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Your Amount"
                    className="mb-3"
                    >
                    <Form.Control  onBlur={(e) => setBid(e.target.value)} type="number" placeholder="Your Amount" />
                    </FloatingLabel>
                    <button type='submit' className='btn btn-dark fw-bold text-warning p-2'>Bid</button>
                </Form> : <h4 className='text-primary fw-bold'>Auction Is Closed</h4>
                }
            <Row className="my-4">
               {
                bidarrays?.map(bid =>
                <Col className="my-4" lg={12} sm={12} md={12}>
                    <h4>{bid?.username}</h4>
                    <h4> {bid?.bidamount &&  <>$ {bid?.bidamount}</>}</h4>
                    <h4>{bid?.biddate}</h4>
                </Col>)
                }
                
            </Row>
            </Col>
            </Row>
        </div>
    );
};

export default BidDetails;