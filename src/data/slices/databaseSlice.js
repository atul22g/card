import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
    name: null,
};

const databaseSlice = createSlice({
    name: 'database',
    initialState,
    reducers: {
        storeData (state, action) { 
            const data = action.payload;
            state.name = data[0].Name;
            state.data = data;
            
        }
    }
});

export const { storeData } = databaseSlice.actions;
export default databaseSlice.reducer;
