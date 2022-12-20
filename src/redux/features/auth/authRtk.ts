// Rtk
import {apiSlice} from '../api/apiSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // auth_register: builder.mutation<
    //   IAuthResponseAuthenticatedUser,
    //   IAuthAttrsLogin
    // >({
    //   query: ({ body }) => ({
    //     url: '/auth/register',
    //     method: 'POST',
    //     body
    //   })
    // }),
    authLogin: builder.mutation({
      query: body => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useAuthLoginMutation} = authApi;
