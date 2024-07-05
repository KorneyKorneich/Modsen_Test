import { createSlice } from '@reduxjs/toolkit'
import {getProducts} from "src/shared/asyncReducers/getProducts.ts";
import { ProductSliceSchema} from "src/shared/types/projectSchema.ts";

const initialState: ProductSliceSchema = {
    products:[{
        id: 0,
        title: "",
        description: '',
        price: 0,
        category: '',
        image: ''
    }],
    isLoading: false,
    isError: false
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(getProducts.pending, state => {
            state.isLoading = true;
            state.isError = false
        })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload

        })
            .addCase(getProducts.rejected, state => {
            state.isError = true;
            state.isLoading = false
        })
    }
})

// export const {} = productSlice.actions
export default productSlice.reducer
