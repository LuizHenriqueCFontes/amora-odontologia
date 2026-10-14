import { Icon } from './Icon'
import styles from './About.module.css'

const values = [
  'Escuta atenta para entender o que você precisa',
  'Explicações claras, sem pressa e sem surpresas',
  'Um plano de cuidado pensado junto com você',
]

export function About() {
  return (
    <section aria-labelledby="about-title" className={styles.section} id="sobre">
      <div className={styles.inner}>
        <div className={styles.visual}>
          <img
            alt="Ambiente claro e tranquilo da clínica odontológica"
            className={styles.image}
            loading="lazy"
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
          />
          <div className={styles.experience}>
            <Icon name="heart" />
            <span>
              <strong>Seu bem-estar</strong>
              <small>em cada detalhe</small>
            </span>
          </div>
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Muito além do consultório</p>
          <h2 id="about-title">
            Aqui, você é recebido pelo <span>nome.</span>
          </h2>
          <p className={styles.description}>
            A gente acredita que um bom cuidado começa com uma boa conversa.
            Por isso, criamos um espaço sem pressa, onde você pode perguntar,
            entender e se sentir à vontade.
          </p>
          <ul className={styles.values}>
            {values.map((value) => (
              <li key={value}>
                <span>
                  <Icon name="check" />
                </span>
                {value}
              </li>
            ))}
          </ul>
          <a className={styles.link} href="#contato">
            Venha conhecer a Amora <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}
