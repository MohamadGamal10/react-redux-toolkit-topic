import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  text: string;
}

const initialState: CounterState = {
  value: 0,
  text: "Increase Counter",
};

const counterSlice = createSlice({
  name: "counter", 
  initialState,
  reducers: {
    increaseAction: (state, actionPayload: PayloadAction<number>) => {
      state.value += actionPayload.payload;
    },
  },
});

export const { increaseAction } = counterSlice.actions;

export default counterSlice.reducer;
