import { createSlice } from "@reduxjs/toolkit";\

const initialState = {
    balance: 0, 
    transactions: [], 
  };

  const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        deposit: (state, action) => {
            const { amount } = action.payload;
            state.balance += amount;
            state.transactions.push({
                action: "Loggingin"
                amount,
