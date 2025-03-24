import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

export default function CheckoutPage({ cartTotal = 0, setShowCart }) {
  const navigate = useNavigate();

  // Fecha o carrinho ao acessar a página
  useEffect(() => {
    setShowCart?.(false);
  }, [setShowCart]);

  // Oculta o carrinho ao mudar a forma de pagamento (caso ainda esteja aberto)
  const handlePaymentChange = () => {
    setShowCart?.(false);
  };

  // Finaliza pedido (aqui pode adicionar validações depois)
  const handleFinalizarPedido = (e) => {
    e.preventDefault();
    navigate("/completed");
  };

  return (
    <div className="page-inner-content">
      <div className="section-title">
        <h3>Pagamento</h3>
        <div className="underline"></div>
      </div>

      <p className="total-purchase">
        <i>Total da compra: R$ {cartTotal.toFixed(2)}</i>
      </p>

      <form className="form" onSubmit={handleFinalizarPedido}>
        <h2>Finalize sua compra:</h2>
        <p>Preencha todos os dados para entrega:</p>

        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="address">Endereço completo:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Rua, número, bairro..."
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className="form-control">
          <label htmlFor="phone">Telefone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(xx) xxxxx-xxxx"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="cupom">Cupom de desconto:</label>
          <input
            type="text"
            id="cupom"
            name="cupom"
            placeholder="Digite o cupom"
          />
        </div>

        <div className="form-control">
          <label htmlFor="payment">Modo de Pagamento:</label>
          <select id="payment" name="payment" onChange={handlePaymentChange}>
            <option value="pix">PIX</option>
            <option value="credito">Cartão de Crédito</option>
            <option value="debito">Cartão de Débito</option>
            <option value="dinheiro">Dinheiro</option>
          </select>
        </div>

        <div className="form-control">
          <button type="submit" className="btn-finalizar">
            Finalizar pedido!
          </button>
        </div>
      </form>
    </div>
  );
}
