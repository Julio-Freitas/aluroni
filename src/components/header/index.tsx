import styles from './Header.module.scss';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h3 className={styles.header__text}>A casa do código e da massa</h3>
      </header>
    </>
  );
}
