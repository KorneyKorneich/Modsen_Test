import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slices/products/productSlice.ts';
import {sidebarSlice} from "src/shared/slices/sidebar/sidebarSlice.ts";
import {cartSlice} from "src/shared/slices/cart/cartSlice.ts";

export const store = configureStore({
    reducer: {
        isMenuOpened: sidebarSlice.reducer,
        products: productsReducer,
        cart: cartSlice.reducer,
    },
});




export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

