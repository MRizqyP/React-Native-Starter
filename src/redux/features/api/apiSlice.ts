import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../../../app/store'

export const apiSlice = createApi({
  reducerPath: 'api', // optional
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-beilink.codelight.id',
    prepareHeaders(headers, {getState}) {
      const rootState = getState() as RootState ;

      if (rootState.auth.auth_token.token) {
        headers.set(
          'Authorization',
          `Bearer ${rootState.auth.auth_token.token}`,
        );
      }

      return headers;
    },
  }),
  tagTypes: ['Profile'],
  endpoints: builder => ({}),
});
