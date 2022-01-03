import React from 'react';

import Allauctions from '../AllAuctiondata/Allauctions';
import AuctioneerNav from './AuctioneerNav';
import Banner from './Banner/Banner';
import BidItems from './BidItems/BidItems';
import Footer from './Footer/Footer';
import Register from './Register/Register';
import RunningBids from './RunningBids/RunningBids';
import UpcomingAuction from './UpcomingAuction/UpcomingAuction';

const AuctioneerHome = () => {

    return (
        <div className='container-fluid'>
            <AuctioneerNav></AuctioneerNav>
            <Banner></Banner>
            <Allauctions></Allauctions>
            <BidItems></BidItems>

            <RunningBids></RunningBids>
            <UpcomingAuction></UpcomingAuction>
            <Register></Register>
            

        </div>
    );
};

export default AuctioneerHome;