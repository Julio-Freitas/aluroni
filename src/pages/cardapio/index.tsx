import { useState } from 'react';
import Buscador from './buscador';
import styles from './Cardapio.module.scss';
import Filtros from './filtros';
import Itens from './itens';
import Ordernador from './ordernador';
import stylesTema from 'styles/Tema.module.scss';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordernador, setOrdernador] = useState('');

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordernador ordernador={ordernador} setOrdernador={setOrdernador} />
      </div>
      <Itens filtro={filtro} busca={busca} ordernador={ordernador} />
    </section>
  );
}
