import { useCallback } from 'react';
import cardapio from '../data/cardapio.json';

// interface IPrato {
//   title: string;
//   description: string;
//   photo: string;
//   size: number;
//   serving: number;
//   price: number;
//   id: number;
//   category: {
//     id: number;
//     label: string;
//   };
// }
export  function useCardapio(
  busca?: string,
  filtro?: number | null,
  ordernador?: string
) {
  const testaBusca = useCallback(
    (title: string) => {
      const regex = new RegExp(`${busca?.trim()}`, 'i');
      return regex.test(title);
    },
    [busca]
  );

  const testaFiltro = useCallback(
    (id: number) => {
      if (filtro) return filtro === id;
      return true;
    },
    [filtro]
  );

  const ordernaPor = useCallback(
    (lista: typeof cardapio) => {
      switch (ordernador) {
      case 'porcao':
        return [...lista.sort((a, b) => a.size - b.size)];
      case 'qtd_pessoas':
        return [...lista.sort((a, b) => a.serving - b.serving)];
      case 'preco':
        return [...lista.sort((a, b) => a.price - b.price)];

      default:
        return lista;
      }
    },
    [ordernador]
  );

  const getCardapio = () => [...cardapio];

  const filterCardapio = useCallback(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    return ordernaPor(novaLista);
  }, [ordernaPor, filtro, busca]);

  return {
    getCardapio,
    filterCardapio,
  };
}
