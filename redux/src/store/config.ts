import { configureStore, createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 1,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
})

export const store = configureStore({
  reducer: counterSlice.reducer
})




export const { increment, decrement } = counterSlice.actions