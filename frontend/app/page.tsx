import CardProduto from "./components/CardProduto";
import Navbar from "./components/Navbar";


export default function Home() {
  return(
    <div className="bg-[var(--background)]">
      <Navbar></Navbar>
      <CardProduto />
    </div>
    
  );
}
