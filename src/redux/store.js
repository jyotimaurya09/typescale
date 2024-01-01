import { configureStore } from '@reduxjs/toolkit'
import  TypescaleReducer from './slices/TypescaleSlice.js';
import SavedTypescaleReducer from './slices/SavedTypescale.js'; 

export const store = configureStore({
  reducer: {
    typescale: TypescaleReducer,
    saved: SavedTypescaleReducer,
  },
});