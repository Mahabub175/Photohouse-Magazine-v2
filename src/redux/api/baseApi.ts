import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// main api for the website
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://task-management-server-lyart-mu.vercel.app`,
    // credentials: "include",
  }),
  tagTypes: ["magazine"],
  endpoints: () => ({}),
});
