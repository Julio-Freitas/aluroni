import { useListCardapio } from 'hooks/useListCardapio';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';
import styles from './Inicio.module.scss';

export default function Inicio() {
  const navigate = useNavigate();
  const pratosRecomendados = useListCardapio() || [];

  const recomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
  }

  return (
    <section className={styles.container}>
      <h3 className={styles.titulo}>Recomendações da cozinha</h3>
      <ul className={styles.recomendados}>
        {recomendados?.map((item) => (
          <li key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              type="button"
              onClick={() => redirecionarParaDetalhes(item)}
              className={styles.recomendado__botao}
            >
              Ver mais
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
