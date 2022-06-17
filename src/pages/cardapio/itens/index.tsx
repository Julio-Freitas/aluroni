import styles from './Itens.module.scss';
import Item from './Item';
import { useMemo } from 'react';
import {useCardapio} from 'hooks/useCardapio';

type Props = {
  filtro: number | null;
  busca?: string;
  ordernador?: string;
};

export default function Itens({ filtro, busca, ordernador }: Props) {
  const { filterCardapio } = useCardapio(busca, filtro, ordernador);


  const cardapioFiltrado = useMemo(() => {
    const novaLista = filterCardapio();
    return novaLista;
  }, [filterCardapio]);

  return (
    <div className={styles.itens}>
      {cardapioFiltrado.length === 0 && 'Nenhuma Prato foi encontrado!'}
      {cardapioFiltrado.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
