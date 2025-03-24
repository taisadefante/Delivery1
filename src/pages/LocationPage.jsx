import "./LocationPage.css";
import WhatsAppButton from "../components/WhatsAppButton"; // ✅ Importar o botão

export default function LocationPage() {
  return (
    <div>
      <div className="section-title">
        <h3>Localização e Contato</h3>
        <div className="underline"></div>
      </div>
      <div className="main-content">
        <p className="andress">Realengo, Rio de Janeiro - RJ, Brasil</p>
        <p className="phone">Número: (21) 99999-9999</p>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58814.8642930217!2d-43.51180097052869!3d-22.8790803648541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9961d6352b312f%3A0xdbcc937520fa83fc!2sRealengo%2C%20Rio%20de%20Janeiro%20-%20State%20of%20Rio%20de%20Janeiro!5e0!3m2!1sen!2sbr!4v1742839543548!5m2!1sen!2sbr"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Localização"
          ></iframe>
        </div>
      </div>
      <WhatsAppButton /> {/* ✅ Botão fixo no canto inferior direito */}
    </div>
  );
}
