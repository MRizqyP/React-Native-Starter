// Rtk
import {apiSlice} from '../api/apiSlice';

export const profileApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query({
      query: () => '/profile',
      providesTags: ['Profile'],
      transformResponse: response => {
        return response.result.data;
      },
    }),
    getAddressInformation: builder.query({
      query: () => '/profile/address',
      providesTags: ['Profile'],
    }),
    updateAvatar: builder.mutation({
      query: body => ({
        url: '/profile/upload-avatar',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAddressInformationQuery,
  useGetProfileQuery,
  useUpdateAvatarMutation,
} = profileApi;
