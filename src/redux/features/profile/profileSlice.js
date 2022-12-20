import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  profileState: {},
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    set_Profile: (state, {payload}) => {
      state.profileState = payload;
    },
  },
});

export const {set_Profile} = profile.actions;

const profileReducer = profile.reducer;

export default profileReducer;
