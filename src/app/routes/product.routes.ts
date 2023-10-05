import { ProductFormComponent } from "../components/product-form/product-form.component"
import { ProductsComponent } from "../components/products/products.component"
import { ProductDetailComponent } from "../pages/product-detail/product-detail.component"
import { ProductComponent } from "../pages/product/product.component"

export const productRoutes = [
    { path: "product", component: ProductComponent },
    { path: "product/:id", component: ProductDetailComponent },
]
export const adminRoutes = [
    { path: "product", component: ProductsComponent },
    { path: "product/add", component: ProductFormComponent },
    { path: "product/:id/edit", component: ProductFormComponent }
]