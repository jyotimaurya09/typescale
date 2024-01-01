import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {"scale": 1.2},
    {"bodySize": 16}

  ]
}

export const typescaleSlice = createSlice({
    name: 'typescale',
    initialState,
    reducers: {
      addTypescale: (state, action) => {
        state.data = action.payload
      },
      refreshTypescale: (state, action) => {
        state.data = [];
      },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { addTypescale, refreshTypescale } = typescaleSlice.actions
  
  export default typescaleSlice.reducer