import "./App.css";
import Capa from "./assets/hashtaurante.webp";
import Nav from "./components/Nav";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";
import Item from "./components/Item";
import { useState } from "react";

interface Produto {
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
}

function App() {
  const items: Produto[][] = [pratosPrincipais, sobremesas, bebidas];
  const [product, setProduct] = useState<number>(0);

  return (
    <>
      <img src={Capa} className="capa" />
      <Nav handlePage={setProduct} />
      <div className="menu">
        {items[product].map((item) => (
          <Item
            key={item.nome}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
    </>
  );
}

export default App;
