import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterValue: '',
  sortBy: '',
  sortOrder: 'asc',
};

const filterProductSlice = createSlice({
  name: 'filterProduct',
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      console.log(
        'setFilterValue action dispatched with payload:',
        action.payload,
      );
      state.filterValue = action.payload;
    },
    setSort: (state, action) => {
      console.log('setSort action dispatched with payload:', action.payload);
      state.sortBy = action.payload.column;
      state.sortOrder = action.payload.order;
    },
  },
});

export const { setFilterValue, setSort } = filterProductSlice.actions;
export default filterProductSlice.reducer;
