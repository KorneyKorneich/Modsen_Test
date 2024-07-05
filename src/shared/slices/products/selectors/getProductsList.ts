import {StoreSchema} from "src/shared/types/projectSchema.ts";

export const getProductsList = (state: StoreSchema) => state.products.products
