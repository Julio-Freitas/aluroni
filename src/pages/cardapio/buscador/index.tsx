import React, { memo, useMemo } from 'react';
import { CgSearch } from 'react-icons/cg';
import styles from './Buscador.module.scss';

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}
function Buscador({ busca, setBusca }: Props) {
  const cgSearch = useMemo(() => <CgSearch />, []);
  return (
    <div className={styles.buscador}>
      <input
        type="search"
        value={busca}
        onChange={({ target }) => setBusca(target.value)}
      />
      {cgSearch}
    </div>
  );
}
export default memo(Buscador);
