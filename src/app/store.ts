import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartSlice from "./features/cart/cartSlice";
// import productsSlice from "./features/products/createAsyncThunkEx";
import { productsApiSlice } from "./features/products/productsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    // RTK
    // products: productsSlice,

    // RTK Query
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([productsApiSlice.middleware]),
    // End RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
