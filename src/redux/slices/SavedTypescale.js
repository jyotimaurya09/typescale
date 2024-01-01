import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
}

export const savedTypescaleSlice = createSlice({
  name: 'saved',
  initialState,
  reducers: {
    addSavedTypescale: (state, action) => {
      const newItem = action.payload;

      // Check if the incoming item already exists in the array
      const itemExists = state.data.some(existingItem =>
        Object.keys(newItem).every(key => newItem[key] === existingItem[key])
      );

      if (!itemExists) {
        // Item not present, add it to the array
        state.data.push(newItem);
      } else {
        // Item already present.
        console.log('Item already exists in the array');
      }
    },
    removeSavedTypescale: (state, action) => {
      const itemToRemove = action.payload;
      // Remove the item from the array
      state.data = state.data.filter(existingItem =>
        Object.keys(itemToRemove).some(key => itemToRemove[key] !== existingItem[key])
      );
    },
    removeAllSaved: (state, action) => {
        state.data = [];
    }
  },
});

// Action creators are generated for each case reducer function
export const { addSavedTypescale, removeSavedTypescale, removeAllSaved } = savedTypescaleSlice.actions;

export default savedTypescaleSlice.reducer;
