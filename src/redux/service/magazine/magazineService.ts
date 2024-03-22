import { baseApi } from "./../../api/baseApi";

const magazineService = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMagazine: build.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
      providesTags: ["magazine"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetMagazineQuery } = magazineService;
