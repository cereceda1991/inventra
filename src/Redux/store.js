import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './Auth/authSlice';
import userReducer from './User/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  middleware: [thunk], // Agrega thunk como middleware
});

export default store;
