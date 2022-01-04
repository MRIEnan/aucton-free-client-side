
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
import Login from './Pages/Shared/Login/Login';
import SignUp from './Pages/Shared/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AuctioneerNav from './Pages/Auctioneer/AuctioneerHome/AuctioneerNav';
import BidDetails from './Pages/Auctioneer/BidDetails/BidDetails';
import YourWinnigAuction from './Pages/Auctioneer/YourWinnigAuction/YourWinnigAuction';
import Electronics from './Pages/Auctioneer/CategorySearch/Electronics/Electronics';
import Furniture from './Pages/Auctioneer/CategorySearch/Furniture/Furniture';
import Jewelry from './Pages/Auctioneer/CategorySearch/jewellery/jewelry';
import Vehicles from './Pages/Auctioneer/CategorySearch/vehicle/Vehicles';
import Watch from './Pages/Auctioneer/CategorySearch/Watch/Watch';
function App() {
  return (
    <div className="container-fluid">
       <AuthProvider>
       <BrowserRouter>
  <AuctioneerNav></AuctioneerNav>
  <Routes>
    <Route path="/" element={<AuctioneerHome />} />
    <Route path="/BidDetails/:id" element={<BidDetails />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />

    <Route path="/BookMakerDashboard" element={<BookMakerDashboard />}>
      <Route path="/BookMakerDashboard" element={<BookmakerHome />} />
      <Route path="/BookMakerDashboard/AddAuction" element={<AddAuction />} />
      <Route path="/BookMakerDashboard/ManageAuction" element={<ManageAuction />} />
      <Route path="/BookMakerDashboard/SeeWhoBid/:id" element={<SeeWhoBid />} />
    </Route>
    <Route path="/YourWinnigAuction" element={<YourWinnigAuction/>}/>
    <Route path="/Electronics" element={<Electronics/>}/>
    <Route path="/Furniture" element={<Furniture/>}/>
    <Route path="/Jewelry" element={<Jewelry/>}/>
    <Route path="/Vehicles" element={<Vehicles/>}/>
    <Route path="/Watch" element={<Watch/>}/>
  </Routes>
  </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;


//done
