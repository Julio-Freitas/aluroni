import styles from './Item.module.scss';
import Cardapio from 'data/cardapio.json';
import classNames from 'classnames';

type Props = typeof Cardapio[0];

export default function Item({
  category,
  description,
  id,
  photo,
  price,
  serving,
  size,
  title,
}: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title}/>
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p>{description} </p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__tipo]: true,
            [styles[`item__tipo__${category.label.toLocaleLowerCase()}`]]: true
          })}>{category.label}</div>
          <div className={styles.item__porcao}>{size} g</div>
          <div className={styles.item__qtdpessoas}>Serve {serving} </div>
          <div className={styles.item__valor}>R$ {price}</div>
        </div>
      </div>
    </div>
  );
}
