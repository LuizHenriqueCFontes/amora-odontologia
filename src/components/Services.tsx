import { Icon } from './Icon'
import styles from './Services.module.css'

const services = [
  {
    icon: 'sparkle',
    title: 'Clareamento',
    description: 'Mais brilho para o seu sorriso, com cuidado em cada etapa.',
  },
  {
    icon: 'tooth',
    title: 'Clínica geral',
    description: 'Prevenção e cuidado completo para a saúde bucal do dia a dia.',
  },
  {
    icon: 'heart',
    title: 'Ortodontia',
    description: 'Tratamentos personalizados para um sorriso alinhado e saudável.',
  },
  {
    icon: 'shield',
    title: 'Implantes',
    description: 'Planejamento cuidadoso para devolver conforto e confiança.',
  },
  {
    icon: 'sparkle',
    title: 'Estética dental',
    description: 'Pequenos detalhes que valorizam a beleza natural do seu sorriso.',
  },
  {
    icon: 'heart',
    title: 'Odontopediatria',
    description: 'Um primeiro contato gentil para cuidar do sorriso desde cedo.',
  },
] as const

export function Services() {
  return (
    <section
      aria-labelledby="services-title"
      className={styles.section}
      id="tratamentos"
    >
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>Cuidado completo, do seu jeito</p>
            <h2 id="services-title">Um sorriso bem cuidado muda tudo.</h2>
          </div>
          <a className={styles.allServices} href="#contato">
            Encontre seu tratamento <Icon name="arrow" />
          </a>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <article className={styles.card} key={service.title}>
              <span className={styles.cardNumber}>
                0{index + 1}
              </span>
              <span className={styles.cardIcon}>
                <Icon name={service.icon} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                aria-label={`Saiba mais sobre ${service.title}`}
                className={styles.cardLink}
                href="#contato"
              >
                <Icon name="arrow" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
