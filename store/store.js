import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./productsSlice";
const store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
   products: productsSlice,
  },
});

export default store;