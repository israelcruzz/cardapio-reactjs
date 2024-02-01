interface Props {
  handlePage: React.Dispatch<React.SetStateAction<number>>;
}

const Nav = (props: Props) => {
  return (
    <div className="navegacao">
      <input type="radio" id="pagina-0" onClick={() => props.handlePage(0)} />
      <label htmlFor="pagina-0">Pratos Principais</label>
      <input type="radio" id="pagina-1" onClick={() => props.handlePage(1)} />
      <label htmlFor="pagina-1">Sobremesas</label>
      <input type="radio" id="pagina-2" onClick={() => props.handlePage(2)} />
      <label htmlFor="pagina-2">Bebidas</label>
    </div>
  );
};

export default Nav;
