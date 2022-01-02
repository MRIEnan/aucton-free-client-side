import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
const initialState = {
  value: 0,
  auctiondata: []
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
      alert('Auction Added')
    })
    builder.addCase(GetAcution.fulfilled, (state, action) => {
      state.auctiondata = action.payload
    })
  },
});

export const { increment, decrement, incrementByAmount } = AuctionSlice.actions;


export default AuctionSlice.reducer;
