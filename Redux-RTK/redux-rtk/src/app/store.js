import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

const store = configureStore({
 // Configure the store with the counter reducer	

    reducer : {
        counter : counterReducer,
        // The key 'counter' will be used to access the counter state in the store
    }
})


export default store;