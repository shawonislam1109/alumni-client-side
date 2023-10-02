import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../Redux/apiSlice/apiSlice";
import ModalSlice from "../Redux/feature/ModalSlice";
import SearchSlice from "../Redux/feature/SearchSlice";
export const store = configureStore({
  reducer: {
    ModalSlice,
    SearchSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
