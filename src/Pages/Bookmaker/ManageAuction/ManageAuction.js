import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { BookMakerDeleteAuction, GetBookmakerAcution, ManageStatus } from '../../../features/AuctionSlice/AuctionSlice';
import Manage from './Manage';

const ManageAuction = () => {
    const dispatch = useDispatch();
    const [demo, setDemo] = useState([])
    useEffect(() => {
        dispatch(GetBookmakerAcution('ahan@gmail.com'))
    },[dispatch, demo ]);

    const managedata = useSelector((state) => state.auctionstore.bookmakerauction)
   

    const DeleteHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(BookMakerDeleteAuction(id))
                setDemo(managedata)
            }
          })
        
    }
    const StatusHandler = (id) => {
        dispatch(ManageStatus(id))
        setDemo(managedata)
    }
    return (
        <Row className='container-fluid'>
            <h1 className='fw-bold my-4'>Manage Your Auction Data</h1>
            {
                managedata?.map(auction => <Manage StatusHandler={StatusHandler} DeleteHandler={DeleteHandler} key={auction._id} auction={auction}></Manage>)
            }
        </Row>
    );
};

export default ManageAuction;