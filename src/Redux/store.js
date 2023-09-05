import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './authSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  middleware: [thunk], // Agrega thunk como middleware
});

export default store;
