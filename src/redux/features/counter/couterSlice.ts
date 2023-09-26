import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ICounterState {
    count: number;
}

const initialState: ICounterState = {
    count: 5
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        }
    },
});

// we will use it in components
export const { decrement, increment, incrementByAmount } = counterSlice.actions

// we will use it in store
export default counterSlice.reducer;