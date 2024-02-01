# Cardapio Website

Este é um projeto de site de cardápio construído com React e Typescript. O site permite aos usuários visualizar opções de alimentos e bebidas, alternando entre as categorias de "Mais Populares", "Bebidas" e "Sobremesas". Os dados são gerenciados por meio do useState e um mock em TypeScript.

## Instalação

Certifique-se de ter o Node.js e o npm instalados em seu ambiente de desenvolvimento.

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/menu-website.git
```

2. Navegue até o diretório do projeto:

```bash
cd menu-website
```

3. Instale as dependências:

```bash
npm install
```

## Uso

Após a instalação, você pode iniciar o site localmente. Execute o seguinte comando:

```bash
npm start
```

O site será iniciado e estará disponível em [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

- `src/components`: Contém os componentes React reutilizáveis.
- `src/data`: Armazena os mocks e dados simulados.
- `src/pages`: Páginas principais do site.
- `src/styles`: Arquivos de estilo do site.

## Tecnologias Utilizadas

- React
- Typescript

## Funcionalidades

- **Navegação entre Categorias**: Os usuários podem alternar entre as categorias "Mais Populares", "Bebidas" e "Sobremesas".

- **useState para Gerenciamento de Estado**: Utilizamos a hook `useState` do React para gerenciar o estado dos componentes.

- **Mock de Dados em TypeScript**: Os dados do cardápio são simulados usando um mock em TypeScript, permitindo fácil extensibilidade e manutenção.

## Contribuição

Sinta-se à vontade para contribuir para o desenvolvimento deste projeto. Basta criar um fork do repositório, fazer suas modificações e enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).