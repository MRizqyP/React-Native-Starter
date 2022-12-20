import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  auth_authenticatedUser: false,
  auth_token: {
    token: null,
    refreshToken: null,
  },
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth_SET_TOKEN: (state, {payload: {token, refreshToken}}) => {
      state.auth_token.token = token;
      state.auth_token.refreshToken = refreshToken;
    },
    auth_SET_AUTHENTICATED_USER: (state, {payload}) => {
      state.auth_authenticatedUser = payload;
    },
    auth_LOGOUT: state => {
      state.auth_token = initialState.auth_token;
      state.auth_authenticatedUser = initialState.auth_authenticatedUser;
    },
  },
});

export const {auth_SET_TOKEN, auth_SET_AUTHENTICATED_USER, auth_LOGOUT} =
  auth.actions;

const authReducer = auth.reducer;

export default authReducer;
