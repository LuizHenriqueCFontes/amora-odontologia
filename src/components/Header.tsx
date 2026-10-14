import { useState } from 'react'
import { Icon } from './Icon'
import styles from './Header.module.css'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#sobre', label: 'A clínica' },
  { href: '#depoimentos', label: 'Depoimentos' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          aria-label="Amora Odontologia — início"
          className={styles.brand}
          href="#inicio"
          onClick={() => setMenuOpen(false)}
        >
          <span className={styles.brandIcon}>
            <Icon name="tooth" />
          </span>
          <span className={styles.brandText}>
            amora<span>odontologia</span>
          </span>
        </a>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>

        <nav
          aria-label="Navegação principal"
          className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ''}`}
        >
          {links.map((link) => (
            <a
              className={styles.navLink}
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className={styles.headerCta}
            href="#contato"
            onClick={() => setMenuOpen(false)}
          >
            Agendar avaliação <Icon name="arrow" />
          </a>
        </nav>
      </div>
    </header>
  )
}
