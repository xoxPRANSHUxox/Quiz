import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './Reducer'; 
const store = configureStore({
    reducer: {
        quiz: reducer
    },
});

export default store;
