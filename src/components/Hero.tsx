import { Icon } from './Icon'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className={styles.hero} id="inicio">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span /> Odontologia com afeto
          </p>
          <h1 id="hero-title">
            Seu sorriso,
            <br />
            no seu <span>tempo.</span>
          </h1>
          <p className={styles.description}>
            Cuidar de você pode ser leve. Um espaço acolhedor, profissionais
            atenciosos e um plano pensado para o seu sorriso.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#contato">
              Quero agendar <Icon name="arrow" />
            </a>
            <a className={styles.secondaryButton} href="#tratamentos">
              Conheça a clínica
            </a>
          </div>
          <div className={styles.socialProof}>
            <div aria-hidden="true" className={styles.avatars}>
              <span>M</span>
              <span>A</span>
              <span>C</span>
              <span>+</span>
            </div>
            <div className={styles.proofText}>
              <span className={styles.stars}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Icon key={index} name="star" />
                ))}
              </span>
              <span>Cuidado que faz bem de verdade</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <img
            alt="Dentista examinando o sorriso de uma paciente durante atendimento"
            className={styles.image}
            fetchPriority="high"
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85"
          />
          <div className={styles.imageTint} />
          <div className={styles.note}>
            <span className={styles.noteIcon}>
              <Icon name="heart" />
            </span>
            <span>
              <strong>Você em primeiro lugar</strong>
              <small>Do primeiro oi ao seu novo sorriso.</small>
            </span>
          </div>
          <div className={styles.cornerLabel}>
            <Icon name="sparkle" />
            <span>Um sorriso muda tudo.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
