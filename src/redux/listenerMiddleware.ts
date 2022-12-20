import {createListenerMiddleware, isAnyOf, TypedStartListening, ListenerEffectAPI} from '@reduxjs/toolkit';
import {
  auth_SET_AUTHENTICATED_USER,
  auth_SET_TOKEN,
  auth_LOGOUT,
} from './features/auth/authSlice';
import {appLocalStorage} from '../utils/local_storage';

import type { RootState, AppDispatch } from '../app/store';

export const listenerMiddleware = createListenerMiddleware();


export type AppStartListening = TypedStartListening<RootState, AppDispatch>

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening


startAppListening({
  matcher: isAnyOf(auth_SET_TOKEN),
  effect: (action, listenerApi) => {
    appLocalStorage.storeDataSingle(
      'token',
      listenerApi.getState().auth.auth_token.token,
    );
  },
});

startAppListening({
  matcher: isAnyOf(auth_LOGOUT),
  effect: (action, listenerApi) => {
    appLocalStorage.removeDataSingle('token');
  },
});
