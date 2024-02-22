import { createSlice } from '@reduxjs/toolkit';

// Colors Slice
const togglePassordSlice = createSlice({
    name: 'togglePassword',
    initialState: {
        type: 'password',
        icon: 'fa-eye',
    },
    reducers: {
        togglePassword(state, action) {
            if (state.type === 'password') {
                state.type = 'text'
                state.icon = 'fa-eye-slash'
            } else {
                state.type = 'password'
                state.icon = 'fa-eye'
            }
        },
    },
});

export const { togglePassword } = togglePassordSlice.actions;
export default togglePassordSlice.reducer;