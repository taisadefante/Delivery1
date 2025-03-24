import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton"; // ✅ importar o botão

export default function HomePage() {
  return (
    <>
      <Header />
      <WhatsAppButton /> {/* ✅ botão fixo no canto inferior direito */}
    </>
  );
}
