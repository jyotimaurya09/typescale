import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      "bodyFont": "calibri",
      "bodyLetterSpacing": 1.5,
      "bodyLineHeight": 1,
      "bodySize": 16,
      "bodyWeight": 400,
      "headingFont": "calibri",
      "headingLetterSpacing": 2,
      "headingLineHeight": 1.5,
      "headingWeight": 100,
      "scale": 1.25,
    }
  ]

}

export const typescaleSlice = createSlice({
  name: 'typescale',
  initialState,
  reducers: {
    addTypescale: (state, action) => {
      state.data = action.payload
    },
    updateTypescale: (state, action) => {
      //console.log("Current action.payload in store : ", action.payload);
      const { key, value } = action.payload;
      state.data.forEach(item => {
        item[key] = value;
      });
      //console.log("Current state.data in store : ", state.data);
    },
    getTypescale: (state, action) => {
      //console.log("Inside store: ", state.data);
    },
    refreshTypescale: (state, action) => {
      state.data = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTypescale, updateTypescale, getTypescale, refreshTypescale } = typescaleSlice.actions

export default typescaleSlice.reducer