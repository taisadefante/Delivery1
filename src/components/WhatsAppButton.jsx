// src/components/WhatsAppButton.jsx
import React from "react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "5521988359825"; // Seu número com DDI

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
    >
      <img src="/images/whatsapp.png" alt="WhatsApp" />
    </a>
  );
}
