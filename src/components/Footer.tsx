import { Icon } from './Icon'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a aria-label="Amora Odontologia — início" className={styles.brand} href="#inicio">
          <span className={styles.brandIcon}>
            <Icon name="tooth" />
          </span>
          <span className={styles.brandText}>
            amora<span>odontologia</span>
          </span>
        </a>
        <p>Um sorriso cuidado com carinho muda o seu dia.</p>
        <a className={styles.backToTop} href="#inicio">
          Voltar ao início <span>↑</span>
        </a>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Amora Odontologia. Todos os direitos reservados.</span>
        <span>Feito com carinho, para você sorrir.</span>
      </div>
    </footer>
  )
}
