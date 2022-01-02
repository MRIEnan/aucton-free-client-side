import React from 'react';

import Allauctions from '../AllAuctiondata/Allauctions';
import AuctioneerNav from './AuctioneerNav';

const AuctioneerHome = () => {

    return (
        <div className='container-fluid'>
            <AuctioneerNav></AuctioneerNav>
            <h1>Online Free Auction Home</h1>
            <Allauctions></Allauctions>
        </div>
    );
};

export default AuctioneerHome;