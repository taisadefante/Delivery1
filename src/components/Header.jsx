import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="inner-content">
        <div className="left-side">
          <h2>
            <i>Deixe Seu Dia Mais Saboroso!</i>
          </h2>

          <Link to="/products" className="see-more-btn">
            <span>Ver cardápio!</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
    </header>
  );
}
