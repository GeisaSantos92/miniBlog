import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div>
        <footer className={styles.footer}>
            <h3>Escreva sobre o que você tem interesse!</h3>
            <p>Mini Blog &copy; 2022</p>
        </footer>
    </div>
  )
}
