import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
};

const databaseSlice = createSlice({
    name: 'database',
    initialState,
    reducers: {
        storeData (state, action) { 
            const data = action.payload;
            console.log(data);
            
        }
    }
});

export const { storeData } = databaseSlice.actions;
export default databaseSlice.reducer;
