import styles from './Item.module.scss';
import Cardapio from 'data/cardapio.json';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

type Props = typeof Cardapio[0];

function Item({
  category,
  description,
  id,
  photo,
  price,
  serving,
  size,
  title,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className={styles.item} data-testid={`item-${id}`} onClick={()=> navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img  data-testid="img" src={photo} alt={title}/>
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2 data-testid="title">{title.trim()}</h2>
          <p data-testid="description">{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__tipo]: true,
            [styles[`item__tipo__${category.label.toLocaleLowerCase()}`]]: true
          })} data-testid="category">{category.label}</div>
          <div className={styles.item__porcao} data-testid="size">{size} g</div>
          <div className={styles.item__qtdpessoas} data-testid="serving">Serve {serving}</div>
          <div className={styles.item__valor} data-testid="price">R$ {price}</div>
        </div>
      </div>
    </div>
  );
}

export default memo(Item);