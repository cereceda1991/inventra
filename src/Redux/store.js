import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './Auth/authSlice';
import userReducer from './User/userSlice';
import darkModeReducer from './DarkMode/darkModeSlice';
import imageReducer from './Images/imageSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    darkMode: darkModeReducer,
    image: imageReducer,
  },
  middleware: [thunk],
});

export default store;
