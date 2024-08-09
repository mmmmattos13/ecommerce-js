import { Route, Routes } from "react-router-dom";

import Produtos from "./pages/produtos";
import CartItem from "./pages/carrinho";
import AddProduct from "./pages/addProduto";

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/carrinho" element={<CartItem />} />
            <Route path="/produtos" element={<AddProduct />} />
        </Routes>
    )
}

export default MainRoutes
