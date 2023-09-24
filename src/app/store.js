import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../Redux/apiSlice/apiSlice";
import ModalSlice from "../Redux/feature/ModalSlice";
export const store = configureStore({
  reducer: {
    ModalSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
