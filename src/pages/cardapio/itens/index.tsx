import styles from './Itens.module.scss';
import cardapio from 'data/cardapio.json';
import Item from './Item';
import { useCallback, useMemo } from 'react';

type Props = {
  filtro: number | null;
  busca?: string;
  ordernador?: string;
};

export default function Itens({ filtro, busca, ordernador }: Props) {
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

  const cardapioFiltrado = useMemo(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    return ordernaPor(novaLista);
  }, [testaBusca, testaFiltro, ordernaPor]);

  return (
    <div className={styles.itens}>
      {cardapioFiltrado.length === 0 && 'Nenhuma Prato foi encontrado!'}
      {cardapioFiltrado.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
