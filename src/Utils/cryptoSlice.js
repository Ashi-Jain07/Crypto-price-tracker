import { createSlice } from '@reduxjs/toolkit';
import sampleData from './sampleData.js';

const initialState = {
  assets: sampleData,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAssetData: (state, action) => {
      const { id, changes } = action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) Object.assign(asset, changes);
    },
  },
});

export const { updateAssetData } = cryptoSlice.actions;
export const selectAssets = (state) => state.crypto.assets;
export default cryptoSlice.reducer;