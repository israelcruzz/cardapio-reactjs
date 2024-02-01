interface Props {
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
}

const Item = (props: Props) => {
  return (
    <div>
      <div className="container-item-cardapio">
        <div className="informacoes-item-cardapio">
          <h2>{props.nome}</h2>;<p>{props.descricao}</p>;<p>{props.preco}</p>;
        </div>
        <img src={props.imagem} className="imagem-item-caradapio" />
      </div>
      ;
    </div>
  );
};

export default Item;
