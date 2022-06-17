import { MdDeleteForever, MdFastfood, MdOutlinePriceChange, MdPeople } from 'react-icons/md';

export const optOrdernador = [
  {
    nome: 'Selecione uma opção',
    value: '',
    icon: <MdDeleteForever />
  },
  {
    nome: 'Porção',
    value: 'porcao',
    icon: <MdFastfood />,
  },
  {
    nome: 'Qtd. pessoas',
    value: 'qtd_pessoas',
    icon: <MdPeople />
  },
  {
    nome: 'Preço',
    value: 'preco',
    icon: <MdOutlinePriceChange />,
  },
];
