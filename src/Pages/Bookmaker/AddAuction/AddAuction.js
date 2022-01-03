import React, { useState } from 'react';
import { Form, Row ,Col, FloatingLabel} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AuctionPost } from '../../../features/AuctionSlice/AuctionSlice';

const AddAuction = () => {
    const [auctiondata, setAuctiondata] = useState({});
    const newbidarray = [{email: '', username: '', bidamount: ''}];
    const [img, setImg] = useState('');
    const dispatch = useDispatch();
    const publishdate = new Date()
    const bidarray = JSON.stringify(newbidarray);
    
    const OnblurHandler = (e) => {
        const auctionname = e.target.name;
        const auctionvalue = e.target.value;
        
        const newdata = {...auctiondata};
        newdata[auctionname] = auctionvalue;
        setAuctiondata(newdata)
    }
    const imgHandler = (e) => {
        const imagevalue = e.target.files[0];
        setImg(imagevalue)
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        if(!img)
        {
            return;
        }
        const fd = new FormData();
        fd.append('productname', auctiondata.productname)
        fd.append('bidprice', auctiondata.bidprice)
        fd.append('category', auctiondata.category)
        fd.append('lastdate', auctiondata.lastdate)
        fd.append('description', auctiondata.description)
        fd.append('bidarray', bidarray)
        fd.append('pulishdate', publishdate)
        fd.append('img', img)
        dispatch(AuctionPost(fd))
        e.target.reset()
    }
    return (
        <Row className='container-fluid'>
            <h1>Add A Auction</h1>
            <Form onSubmit={SubmitHandler}>
                <Row className='mb-3'>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Product Name"
                    className="mb-3"
                    as={Col}
                    >
                    <Form.Control name='productname' onBlur={OnblurHandler} type="text" placeholder="Product Name" />
                    </FloatingLabel>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Bid Start From"
                    className="mb-3"
                    as={Col}
                    >
                    <Form.Control  name='bidprice' onBlur={OnblurHandler} type="number" placeholder="Bid Start From" />
                    </FloatingLabel>
                </Row>
                <Row className='mb-3'>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Product Category"
                    className="mb-3"
                    as={Col}
                    >
                    <Form.Control  name='category' onBlur={OnblurHandler}  type="text" placeholder="Product Category" />
                    </FloatingLabel>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Last date"
                    className="mb-3"
                    as={Col}
                    >
                    <Form.Control  name='lastdate' onBlur={OnblurHandler}  type="date" placeholder="Last date" />
                    </FloatingLabel>
                </Row>
                <Row className='mb-3'>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Choose Product Image</Form.Label>
                        <Form.Control onBlur={imgHandler} type="file" />
                    </Form.Group>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Description"
                    className="mb-3"
                    
                    >
                    <Form.Control as="textarea" name='description' onBlur={OnblurHandler}  type="text" placeholder="Description" />
                    </FloatingLabel>
                </Row>
            <button type='submit' className='btn btn-dark text-warning'>ADD AUCTION</button>
            </Form>
        </Row>
    );
};

export default AddAuction;