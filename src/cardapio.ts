import enroladinhoMignonImg from './assets/pratos/enroladinho-mignon.jpeg';
import casal20Img from './assets/pratos/casal-20.jpeg';
import burguerPicanhaImg from './assets/pratos/burguer-picanha.jpeg';
import fishChipsImg from './assets/pratos/fish-chips.jpeg';
import risotoCamaraoTrufadoImg from './assets/pratos/risoto-camarao-trufado.jpeg';

import brownieImg from './assets/sobremesas/brownie.jpeg';
import cocadaFornoImg from './assets/sobremesas/cocada-forno.jpeg';
import petitGateauImg from './assets/sobremesas/petit-gateau.jpeg';

import aguaSemGasImg from './assets/bebidas/agua-sem-gas.jpeg';
import aguaComGasImg from './assets/bebidas/agua-com-gas.jpeg';
import cocaColaImg from './assets/bebidas/coca-cola.jpeg';
import guaranaImg from './assets/bebidas/guarana.jpeg';
import heinekenImg from './assets/bebidas/heineken.jpeg';

interface Model {
  nome: string,
  preco: string,
  imagem: string,
  descricao: string,
}

export const enroladinhoMignon: Model = {
  nome: 'Enroladinho de Mignon',
  preco: 'R$ 64,90',
  imagem: enroladinhoMignonImg,
  descricao: 'Finíssimas fatias de filé mignon enroladas no parmesão',
};
const casal20: Model = {
  nome: 'Casal 20',
  preco: 'R$ 29,00',
  imagem: casal20Img,
  descricao: 'Casal perfeito pão de alho caseiro e linguiça toscana grill',
};
const burguerPicanha: Model = {
  nome: 'Burguer de Picanha',
  preco: 'R$ 44,90',
  imagem: burguerPicanhaImg,
  descricao:
    'Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon',
};
const fishChips: Model = {
  nome: 'Fish and Chips',
  preco: 'R$ 79,90',
  imagem: fishChipsImg,
  descricao:
    'Iscas de Peixe Empanada na Farinha Panko e Flocos de Milho e Batata Frita Palito',
};
const risotoCamaraoTrufado: Model = {
  nome: 'Risoto de Camarão Trufado',
  preco: 'R$ 72,90',
  imagem: risotoCamaraoTrufadoImg,
  descricao:
    'Arroz Arbóreo, camarões salteados no azeite trufado e crocantes de panko',
};

const brownie: Model = {
  nome: 'Brownie',
  preco: 'R$ 32,90',
  imagem: brownieImg,
  descricao:
    'Delicioso brownie caseiro, sorvete de creme, calda quente de chocolate',
};
const cocadaForno: Model = {
  nome: 'Cocada de Forno',
  preco: 'R$ 32,90',
  imagem: cocadaFornoImg,
  descricao:
    'Cremosa cocada de coco torrado, doce de leite argentino e sorvete de creme',
};
const petitGateau: Model = {
  nome: 'Petit Gateau',
  preco: 'R$ 34,90',
  imagem: petitGateauImg,
  descricao:
    'Bolo quente recheado com ganache de chocolate, leite condensado e castanha de caju',
};

const aguaSemGas: Model = {
  nome: 'Água sem gás',
  preco: 'R$ 6,90',
  imagem: aguaSemGasImg,
  descricao: '310ml',
};
const aguaComGas: Model = {
  nome: 'Água com gás',
  preco: 'R$ 7,90',
  imagem: aguaComGasImg,
  descricao: '310ml',
};
const cocaCola: Model = {
  nome: 'Coca-Cola',
  preco: 'R$ 7,90',
  imagem: cocaColaImg,
  descricao: '290ml',
};
const guarana: Model = {
  nome: 'Guaraná Antártica',
  preco: 'R$ 7,90',
  imagem: guaranaImg,
  descricao: '350ml',
};
const heineken: Model = {
  nome: 'Heineken',
  preco: 'R$ 15,90',
  imagem: heinekenImg,
  descricao: '355ml',
};

export const pratosPrincipais: Model[] = [
  burguerPicanha,
  enroladinhoMignon,
  casal20,
  fishChips,
  risotoCamaraoTrufado,
];

export const sobremesas: Model[] = [brownie, cocadaForno, petitGateau];

export const bebidas: Model[] = [aguaSemGas, aguaComGas, cocaCola, guarana, heineken];
