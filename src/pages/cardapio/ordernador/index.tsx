import styles from './Ordernador.module.scss';
import { optOrdernador } from './ordernador';
import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  ordernador: string;
  setOrdernador: React.Dispatch<React.SetStateAction<string>>;
}

type Options = typeof optOrdernador[0];

export default function Ordernador({ ordernador, setOrdernador }: Props) {
  const [aberto, setAberto] = useState(false);

  const nomeOrdernador = useMemo(
    () =>
      optOrdernador.find(
        (option: Options) => option.value === ordernador
      ) as Options,
    [ordernador]
  );

  const arrow = useMemo(
    () => (aberto ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />),
    [aberto]
  );

  return (
    <button
      className={styles.ordenador}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span data-testid="nomeOrdernador">
        {nomeOrdernador?.value ? (
          <>
            {nomeOrdernador?.icon}
            {nomeOrdernador?.nome}
          </>
        ) : (
          'Ordernar por'
        )}
      </span>
      {arrow}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles['ordenador__options--ativo']]: aberto,
        })}
        data-testid="container-options"
      >
        {optOrdernador.map((option) => (
          <div
            key={option.value}
            onClick={() => setOrdernador(option.value)}
            className={classNames({
              [styles.ordenador__option]: true,
              [styles['ordenador__option--ativo']]: ordernador === option.value,
            })}
            data-testid={option.value}
          >
            {option?.icon}
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
