import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function SidebarProduct({
  id,
  image,
  name,
  rate,
  price,
  removeProductToCart,
  addToCartTotal,
}) {
  const [quantity, setQuantity] = useState(1);
  const [priceSum, setPriceSum] = useState(price);

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity < 1 || newQuantity > 20) return;

    const newPriceSum = newQuantity * price;
    const difference = newPriceSum - priceSum;

    setQuantity(newQuantity);
    setPriceSum(newPriceSum);
    addToCartTotal(difference);
  };

  const handleRemove = () => {
    removeProductToCart(id);
    addToCartTotal(-priceSum);
  };

  return (
    <div className="sidebar-product">
      <div className="left-side">
        <button onClick={handleRemove} className="remove-product-btn">
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="details">
          <h4>{name}</h4>
          <p>R$ {price.toFixed(2)}</p>

          <input
            type="number"
            min={1}
            max={20}
            value={quantity}
            onChange={handleQuantityChange}
          />

          {quantity > 1 && (
            <p className="price-sum">
              <b>Total:</b> R$ {priceSum.toFixed(2)}
            </p>
          )}
        </div>
      </div>

      <div className="right-side">
        <img
          src={`/${image || "images/sem-imagem.jpg"}`}
          alt={name}
          onError={(e) => {
            e.target.src = "/images/sem-imagem.jpg";
          }}
        />
      </div>
    </div>
  );
}
