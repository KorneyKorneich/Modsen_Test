import {store} from "src/shared/store/rootStore.ts";

export function isItemInCart(itemId: number){
    const itemIndex = store.getState().cart.items.findIndex((item) => item.productId === itemId);
    return itemIndex === -1
}
