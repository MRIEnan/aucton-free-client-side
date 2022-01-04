import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

//BookMaker Posting auction to database
export const AuctionPost = createAsyncThunk(
  'Auction/auctionPost',
  async (fd) => {
    const response = await fetch('http://localhost:5000/auctionpost',{
      method: 'POST',
      body: fd 
    }).then(res=> res.json()).catch(error => {
  });
    return response
  }
)
//auctioneer geeting auction data
export const GetAcution = createAsyncThunk(
  'Auction/getAcution',
  async () => {
    const response = await fetch('http://localhost:5000/getAcution').then(res=> res.json()).catch(error => {
  });
    return response
  }
)
//auctioneer and bookmaker geeting auction data
export const GetBidDetails = createAsyncThunk(
  'Auction/getBidDetails',
  async (id) => {
    console.log('hitted',id)
    const response = await fetch(`http://localhost:5000/GetBidDetails/${id}`).then(res=> res.json()).catch(error => {
  });
    return response
  }
)
//bookmaker geeting individual auction data by their email
export const GetBookmakerAcution = createAsyncThunk(
  'Auction/getBookmakerAcution',
  async (email) => {
    const response = await fetch(`http://localhost:5000/GetBookmakerAcution?email=${email}`).then(res=> res.json()).catch(error => {
  });
    return response
  }
)
//bookmaker deleting individual auction data 
export const BookMakerDeleteAuction = createAsyncThunk(
  'Auction/bookMakerDeleteAuction',
  async (id) => {
    const response = await fetch(`http://localhost:5000/BookMakerDeleteAuction/${id}`,{
      method: 'DELETE'
    }).then(res=> res.json()).catch(error => {
  });
    return response
  }
)
//bookmaker managing status individual auction data 
export const ManageStatus = createAsyncThunk(
  'Auction/manageStatus',
  async (id) => {
    const response = await fetch(`http://localhost:5000/ManageStatus/${id}`,{
      method: 'PUT'
    }).then(res=> res.json()).catch(error => {
  });
    return response
  }
)
//Auctioneer geting data by category
export const GetCategoryData = createAsyncThunk(
  'Auction/getCategoryData',
  async (category) => {
    console.log('hitted',category)
    const response = await fetch(`http://localhost:5000/GetCategoryData?category=${category}`).then(res=> res.json()).catch(error => {
  });
    return response
  }
)
const initialState = {
  value: 0,
  auctiondata: [],
  auctionproduct: {},
  bookmakerauction: [],
  categorydata: []
};

export const AuctionSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(AuctionPost.fulfilled, (state, action) => {
      Swal.fire(
        'Good job!',
        'Auction Added SuccessFully',
        'success'
      )
    })
    builder.addCase(GetAcution.fulfilled, (state, action) => {
      state.auctiondata = action.payload
    })
    builder.addCase(GetBidDetails.fulfilled, (state, action) => {
      state.auctionproduct = {...action.payload}
    })
    builder.addCase(GetBookmakerAcution.fulfilled, (state, action) => {
      state.bookmakerauction = action.payload
    })
    builder.addCase(BookMakerDeleteAuction.fulfilled, (state, action) => {
      Swal.fire(
        'Good job!',
        'Auction Deleted SuccessFully',
        'success'
      )
    })
    builder.addCase(ManageStatus.fulfilled, (state, action) => {
      Swal.fire(
        'Good job!',
        'Auction Closed SuccessFully',
        'success'
      )
    })
    builder.addCase(GetCategoryData.fulfilled, (state, action) => {
      state.categorydata = action.payload
    })
  },
});

export const { increment, decrement, incrementByAmount } = AuctionSlice.actions;


export default AuctionSlice.reducer;
