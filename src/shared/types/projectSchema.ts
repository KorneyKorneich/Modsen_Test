import {AppDispatch, AppStore, RootState} from "src/shared/store/rootStore.ts";
import { useDispatch, useSelector, useStore } from 'react-redux'
export type ReactFC<Props extends Record<PropertyKey, unknown> = {}> = FC<PropsWithChildren<Props>>

export interface ProductSchema {
    id: number;
    title:string;
    price: number;
    category: string;
    description: string;
    image: string;
}
export interface StoreSchema {
    products: ProductSliceSchema;
    theme: string;
}

export interface ProductSliceSchema {
    products: ProductSchema[];
    isLoading: boolean;
    isError: boolean;
}

// export interface ProductSliceSchema {
//     product: ProductSchema[];
//     isLoading: boolean;
//     isError: boolean;
// }



// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()
