import React from "react";

export default function Product({
  id,
  name,
  image,
  description,
  price,
  addProductToCart,
}) {
  const styles = {
    card: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "10px 15px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      height: "100px",
      overflow: "hidden",
      gap: "15px",
    },
    image: {
      width: "80px",
      height: "80px",
      borderRadius: "6px",
      objectFit: "cover",
    },
    name: {
      fontWeight: "bold",
      fontSize: "14px",
      minWidth: "120px",
      whiteSpace: "nowrap",
    },
    description: {
      fontSize: "13px",
      color: "#555",
      flex: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    price: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#e36414",
      minWidth: "80px",
      textAlign: "right",
    },
    button: {
      backgroundColor: "#e36414",
      color: "#fff",
      border: "none",
      padding: "8px 12px",
      borderRadius: "6px",
      cursor: "pointer",
      whiteSpace: "nowrap",
    },
  };

  return (
    <div style={styles.card}>
      <img
        src={`/${image || "images/sem-imagem.jpg"}`}
        alt={name}
        style={styles.image}
        onError={(e) => {
          e.target.src = "/images/sem-imagem.jpg";
        }}
      />
      <div style={styles.name}>{name}</div>
      <div style={styles.description}>{description}</div>
      <div style={styles.price}>R$ {price.toFixed(2)}</div>
      <button style={styles.button} onClick={() => addProductToCart(id)}>
        Adicionar
      </button>
    </div>
  );
}
