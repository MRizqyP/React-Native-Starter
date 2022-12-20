import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  profileState: {},
  provinceState: {},
  cityState: {},
  upgradeInfoState: {},
};

const attribute = createSlice({
  name: 'attribute',
  initialState,
  reducers: {
    set_Profile: (state, {payload}) => {
      state.profileState = payload;
    },
  },
});

export const {set_Profile} = attribute.actions;

const attributeReducer = attribute.reducer;

export default attributeReducer;
