import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AuctioneerHome from './Pages/Auctioneer/AuctioneerHome/AuctioneerHome';
import BookMakerDashboard from './Pages/Bookmaker/BookmakerDashBoard/BookMakerDashboard';
import BookmakerHome from './Pages/Bookmaker/BookmakerHome/BookmakerHome';
import AddAuction from './Pages/Bookmaker/AddAuction/AddAuction';
import ManageAuction from './Pages/Bookmaker/ManageAuction/ManageAuction';
import SeeWhoBid from './Pages/Bookmaker/SeeWhoBid/SeeWhoBid';
import BidDetails from './Pages/Auctioneer/BidDetails/BidDetails';

function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuctioneerHome/>}/>
            <Route path="/BidDetails/:id" element={<BidDetails/>}/>

            <Route path="/BookMakerDashboard" element={<BookMakerDashboard/>}>
                <Route path="/BookMakerDashboard" element={<BookmakerHome/>}/>
                <Route path="/BookMakerDashboard/AddAuction" element={<AddAuction/>}/>
                <Route path="/BookMakerDashboard/ManageAuction" element={<ManageAuction/>}/>
                <Route path="/BookMakerDashboard/SeeWhoBid/:id" element={<SeeWhoBid/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
