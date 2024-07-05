import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProductSchema} from "src/shared/types/projectSchema.ts";

export const getProducts = createAsyncThunk<ProductSchema[]>(
    'products/getProducts',
    async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        return response.data;
    }
);
