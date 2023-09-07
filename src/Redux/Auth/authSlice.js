// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    // Otros campos de estado relacionados con la autenticación
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        // Otros reducers para manejar la autenticación
    },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
