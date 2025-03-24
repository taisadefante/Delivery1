import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import WhatsAppButton from "../components/WhatsAppButton"; // caminho corrigido

export default function ProductsPage({ addProductToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setSelectedCategory(""); // começa em "Todos"
      })
      .catch((err) => console.error("Erro ao carregar produtos:", err));
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const categoriasOrdenadas = [
    "Todos",
    ...categories
      .filter((cat) => cat !== "Sobremesas" && cat !== "Bebidas")
      .sort(),
    "Sobremesas",
    "Bebidas",
  ];

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div
      style={{
        paddingTop: "140px",
        backgroundColor: "#250000",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* Botões de categorias */}
      <div
        style={{
          position: "fixed",
          top: "70px",
          left: 0,
          right: 0,
          zIndex: 9998,
          backgroundColor: "#250000",
          padding: "15px 10px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          borderBottom: "1px solid #442020",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          marginTop: "30px",
        }}
      >
        {categoriasOrdenadas.map((category) => {
          const isActive =
            selectedCategory === category ||
            (category === "Todos" && selectedCategory === "");
          return (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category === "Todos" ? "" : category)
              }
              style={{
                padding: "10px 20px",
                borderRadius: "20px",
                border: isActive ? "2px solid #e36414" : "1px solid #ccc",
                backgroundColor: isActive ? "#f39f5a" : "#fff",
                color: "#000",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "0.2s ease",
                boxShadow: isActive ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Lista de produtos */}
      <div style={{ padding: "0 20px 40px" }}>
        <ProductsList
          products={filteredProducts}
          addProductToCart={addProductToCart}
        />
      </div>

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
