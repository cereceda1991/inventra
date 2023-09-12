import { createSlice } from '@reduxjs/toolkit';

const exportSlice = createSlice({
  name: 'export',
  initialState: {
    exporting: false,
  },
  reducers: {
    startExporting: (state) => {
      state.exporting = true;
    },
    finishExporting: (state) => {
      state.exporting = false;
    },
  },
});

export const { startExporting, finishExporting } = exportSlice.actions;

export default exportSlice.reducer;
