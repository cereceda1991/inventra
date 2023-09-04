// darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('darkMode') === 'true' || false;

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      const newDarkMode = !state;
      localStorage.setItem('darkMode', newDarkMode);
      return newDarkMode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
