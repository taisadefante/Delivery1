import { Link } from "react-router-dom";
import "./AboutPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import WhatsAppButton from "../components/WhatsAppButton"; // ✅ importar o botão

export default function AboutPage() {
  return (
    <div className="page-inner-content">
      <div className="section-title">
        <h3>Sobre a Nossa Lanchonete</h3>
        <div className="underline"></div>
      </div>
      <div className="main-content">
        <div className="text-house">
          <img
            src="/images/pizzaria-casa.jpeg"
            alt="fachada da lanchonete"
            className="house"
          />

          <p>
            A <strong>Lanchonete</strong> nasceu com o propósito de oferecer
            muito mais do que apenas boas refeições — nosso objetivo é
            proporcionar experiências memoráveis para todos os paladares.
          </p>

          <p>
            Aqui você encontra um cardápio completo: pizzas artesanais,
            hambúrgueres suculentos, porções generosas, bebidas geladas,
            sobremesas irresistíveis e muito mais. Tudo preparado com
            ingredientes frescos, carinho e aquele toque caseiro que faz a
            diferença.
          </p>

          <p>
            Cada detalhe do nosso espaço foi pensado para que você se sinta à
            vontade, seja para uma refeição rápida no dia a dia, um encontro
            entre amigos ou aquele lanche especial no fim de semana.
          </p>

          <p>
            Com atendimento atencioso, ambiente acolhedor e sabores marcantes,
            nos tornamos um ponto de referência na região — sempre prontos para
            receber você com um sorriso no rosto e o prato favorito na mesa.
          </p>

          <p>
            Na Lanchonete, qualidade, sabor e hospitalidade andam lado a lado.
            Estamos prontos para te atender com muito prazer e fazer parte dos
            seus melhores momentos.
          </p>

          <Link to="/location" className="see-more-btn">
            Nossa Localização&nbsp;
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
      <WhatsAppButton /> {/* ✅ botão fixo no canto direito inferior */}
    </div>
  );
}
