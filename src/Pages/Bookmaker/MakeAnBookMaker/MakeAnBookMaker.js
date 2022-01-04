import React, { useState } from 'react';
import { Col, Row, FloatingLabel, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'
const MakeAnBookMaker = () => {
    const [email, setEmail] = useState('');

    const OnClickHandler = () => {
        fetch(`https://young-atoll-51285.herokuapp.com/makeBookMaker?email=${email}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire(
                'Good job!',
                'Book Maker Added SuccessFully',
                'success'
              )
        })
    }
    return (
        <Row className='container-fluid d-flex align-items-center justify-content-center'>
            <Col lg={8} md={10} sm={12}>
                <h4 className='text-center fw-bold my-4'>Make A BookMaker</h4>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Enter EMail"
                    className="mb-3"
                    as={Col}
                    >
                    <Form.Control name='productname' onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter EMail" />
                    </FloatingLabel>
                <button onClick={OnClickHandler} className="btn regularbtn text-light">Make Book Maker</button>
            </Col>
        </Row>
    );
};

export default MakeAnBookMaker;