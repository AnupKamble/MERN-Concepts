import { createSlice } from "@reduxjs/toolkit";

// Initial state of the counter 
// we can access this value in the component using useSelector hook
const initialState = {
    value:0,
     
}

   // createSlice is a function that creates a slice of the Redux store
    // A slice is a piece of the Redux state and the reducers that handle actions related to that piece
    // It takes an object with the following properties:
    // name: The name of the slice, used to generate action types


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: stat=> {
            stat.value += 1;
        },

        decrement : state=> {
            state.value -=1;
        }
    }
})


export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;