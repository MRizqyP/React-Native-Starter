// Rtk
import {apiSlice} from '../api/apiSlice';

export const attributeApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUpgradeInfo: builder.query({
      query: () => '/attributes/upgrade_info',
      transformResponse: response => {
        const data = {
          kaspro_desc: response.result.info[0].description,
          banktransfer_desc: response.result.info[1].description,
        };
        return data;
      },
    }),
  }),
  overrideExisting: true,
});

export const {useGetUpgradeInfoQuery} = attributeApi;
