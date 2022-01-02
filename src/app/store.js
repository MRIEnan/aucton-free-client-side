import { configureStore } from '@reduxjs/toolkit';
import auctionReducer from '../features/AuctionSlice/AuctionSlice';

export const store = configureStore({
  reducer: {
    auctionstore: auctionReducer,
  },
});
