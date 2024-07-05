import { Route, Routes } from "react-router";
import { CART, HOME, NOT_FOUND, PRODUCT, SHOP } from "src/shared/providers/routerProvider/routes.ts";
import { Home } from "src/pages/Home/Home.tsx";
import NotFound from "src/pages/NotFound/NotFound.tsx";
import {BrowserRouter} from "react-router-dom";
import Shop from "src/pages/Shop/Shop.tsx";
import {Cart} from "src/pages/Cart/Cart.tsx";
import {ProductPage} from "src/pages/Product/Product.tsx";
export const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={NOT_FOUND} element={<NotFound />} />
                <Route path={HOME} element={<Home />} />
                <Route path={SHOP} element={<Shop />} />
                <Route path={CART} element={<Cart />} />
                <Route path={PRODUCT + "/:productId"} element={<ProductPage />} />
            </Routes>
        </BrowserRouter>

    );
}
