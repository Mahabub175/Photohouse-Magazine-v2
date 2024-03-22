import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import magazineSlice from "./features/magazine/magazineSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    magazine: magazineSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
