import { ReactComponent as Logo } from 'assets/logo.svg';
import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

export default function Menu() {
  const [ativo, setAtivo] = useState('');
  const rotas = [
    {
      label: 'Inicio',
      to: '/',
    },
    { label: 'Cardápio',
      to: '/cardapio' },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ];


  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}> 
    
        {rotas.map((rota) => (
          <li  key={rota.to} className={classNames({
            [styles.menu__link]: true,
            [styles['menu__link--ativo']]: ativo.replace('/', '') === rota.to.replace('/', '')
          })}
          onClick={()=> setAtivo(rota.to.replace('/', ''))}
          >
   
            <Link to={rota.to} >
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
