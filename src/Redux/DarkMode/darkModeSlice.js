import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: localStorage.getItem('darkmode') === 'true',
  reducers: {
    toggleDarkMode: (state) => {
      const newMode = !state;
      localStorage.setItem('darkmode', newMode);
      return newMode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
