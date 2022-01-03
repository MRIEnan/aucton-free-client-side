import React, { useEffect, useState } from 'react';
import RunningBid from '../RunningBid/RunningBid';
import './RunningBids.css'

const RunningBids = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
        , [])
    return (
        <div>
            <h2 className="services-title w-25 mx-auto ">Deals of this week</h2>
            <div className="services-container">

                {
                    services.map(service => <RunningBid
                        key={service.id}
                        service={service}

                    >

                    </RunningBid>)
                }


            </div>


        </div>
    );
};

export default RunningBids;