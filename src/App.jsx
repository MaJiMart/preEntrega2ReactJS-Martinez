import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartContextProv } from "./context/cartContext"

import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailCountainer } from "./components/ItemDetailCountainer/ItemDetailCountainer"
import { NotFound } from "./components/NotFound/NotFound"
import { CartContainer } from "./components/CartContainer/CartContainer"

function App() {
  return (
    <CartContextProv>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />

          <Route path="/category/:category" element={<ItemListContainer/>} />
          <Route path="/detalle/:prod" element={<ItemDetailCountainer/>} />

          <Route path="/cart" element={<CartContainer/>} />

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProv>
    
  );
}

export default App;
