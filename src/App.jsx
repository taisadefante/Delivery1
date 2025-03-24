import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import LocationPage from "./pages/LocationPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderCompleted from "./pages/OrderCompleted";

// Components
import NavBar from "./components/NavBar";
import SidebarCart from "./components/SidebarCart";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // ✅ Carrega produtos do db.json
  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        console.error("Erro ao carregar os produtos:", err);
      });
  }, []);

  // ✅ Atualiza total do carrinho
  useEffect(() => {
    const total = selectedProducts.reduce(
      (acc, product) => acc + product.price,
      0
    );
    setCartTotal(total);
  }, [selectedProducts]);

  // ✅ Adiciona produto
  const addProductToCart = (id) => {
    const productToAdd = products.find((product) => product.id === id);
    if (!selectedProducts.some((product) => product.id === id)) {
      setSelectedProducts([...selectedProducts, productToAdd]);
    }
  };

  // ✅ Remove produto
  const removeProductToCart = (id) => {
    const newList = selectedProducts.filter((product) => product.id !== id);
    setSelectedProducts(newList);
  };

  return (
    <Router>
      <div>
        <NavBar setShowCart={setShowCart} selectedProducts={selectedProducts} />

        <SidebarCart
          addProductToCart={addProductToCart}
          removeProductToCart={removeProductToCart}
          cartTotal={cartTotal}
          selectedProducts={selectedProducts}
          setShowCart={setShowCart}
          showCart={showCart}
        />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/products"
              element={
                <ProductsPage
                  products={products}
                  addProductToCart={addProductToCart}
                  removeProductToCart={removeProductToCart}
                  selectedProducts={selectedProducts}
                  showCart={showCart}
                  setShowCart={setShowCart}
                  cartTotal={cartTotal}
                />
              }
            />

            <Route
              path="/cart/checkout"
              element={
                <CheckoutPage
                  cartTotal={cartTotal}
                  setShowCart={setShowCart} // <- Fechar o carrinho automaticamente
                />
              }
            />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/completed" element={<OrderCompleted />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
