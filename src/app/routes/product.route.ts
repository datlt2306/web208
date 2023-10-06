import { ProductDetailComponent } from "../components/product-detail/product-detail.component"
import { ProductEditComponent } from "../components/product-edit/product-edit.component"
import { ProductsComponent } from "../components/products/products.component"

export const productWebsiteRoutes = [
    { path: "product", component: ProductsComponent },
    { path: "product/:id", component: ProductDetailComponent }
]
export const productAdminRoutes = [
    { path: "products", component: ProductsComponent },
    { path: "products/:id", component: ProductEditComponent }
]