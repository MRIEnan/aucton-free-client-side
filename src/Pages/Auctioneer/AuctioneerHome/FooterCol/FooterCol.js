import React from 'react';
// import { Link } from 'react-router-dom';


const FooterCol = (props) => {
    // console.log(props);
    return (
        <div className="col-md-3 col-sm-6">
            <h4 className="text-White">{props.menuTitle} </h4>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li key={index}>
                        <a href={item.link} className="text-secondary">{item.name}</a>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default FooterCol;