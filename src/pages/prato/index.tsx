import {  useMemo } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';


import styles from './Prato.module.scss';

import { lazy } from 'react';

const TagsPrato = lazy(() => import('components/TagsPrato'));


export default function Prato() {
  const { id } = useParams();
  const navigate = useNavigate();

  const prato = useMemo(
    () => cardapio.find((item) => item.id === Number(id)),
    [id]
  );

  if (!prato) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <button type="button" className={styles.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <div className={styles.container} data-testid={prato.id.toString()}>
        <h1 className={styles.titulo}>{prato.title}</h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{prato.description}</p>
        </div>
        <TagsPrato {...prato} />
      </div>
    </>
  );
}
