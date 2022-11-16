import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

import productsSlice from "./productsSlice";
const store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
   products: productsSlice,
   cart:cartSlice.reducer,
  },
});

export default store;