import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: 'feed',
    initialState: null,
    reducers: {
        getFeedData: (state, action) => action.payload,
        removeFeedData: () => null
    }
});

export const { getFeedData, removeFeedData } = feedSlice.actions;
export default feedSlice.reducer;