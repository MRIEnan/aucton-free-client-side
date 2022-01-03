import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2'
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
//auctioneer geeting auction data
export const GetBidDetails = createAsyncThunk(
  'Auction/getBidDetails',
  async (id) => {

    const response = await fetch(`http://localhost:5000/GetBidDetails/${id}`).then(res=> res.json()).catch(error => {
  });
    return response
  }
)

//auctioneer posting bid data
export const PostingBid = createAsyncThunk(
  'Auction/postingBid',
   async (data) => {
     console.log('hitted', data)
    const response = await fetch('http://localhost:5000/postingBid',{
      method: 'PUT',
      body: JSON.stringify(data)
    }).then(res=> res.json()).catch(error => {
  });
    return response
  }
)
const initialState = {
  value: 0,
  auctiondata: [],
  auctionproduct: {}
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
      state.auctionproduct = action.payload
    })
    builder.addCase(PostingBid.fulfilled, (state, action) => {
      Swal.fire(
        'Good job!',
        'Bid SuccessFully',
        'success'
      )
    })
  },
});

export const { increment, decrement, incrementByAmount } = AuctionSlice.actions;


export default AuctionSlice.reducer;
