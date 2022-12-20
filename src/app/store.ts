import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import {apiSlice} from '../redux/features/api/apiSlice';

//RTK
import {authApi} from '../redux/features/auth/authRtk';
// import {profileApi} from '../redux/features/profile/profileRtk';
// import {attributeApi} from '../redux/features/attributes/attributeRtk';

// //Slice
import auth from '../redux/features/auth/authSlice';
// import profile from '../redux/features/profile/profileSlice';
// import attribute from '../redux/features/attributes/attributeSlice';

import {listenerMiddleware} from '../redux/listenerMiddleware';

import rootReducer from '../redux/rootReducer';

export const store = configureStore({
  reducer: {
    // profile,
    auth,
    // attribute,
    [authApi.reducerPath]: authApi.reducer,
    // [profileApi.reducerPath]: profileApi.reducer,
    // [attributeApi.reducerPath]: attributeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      listenerMiddleware.middleware,
    ),
  devTools: true,
});

//Root State
export type AppDispatch = typeof store.dispatch;

//App Store
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
