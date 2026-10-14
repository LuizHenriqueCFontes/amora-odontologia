import { Icon } from './Icon'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote:
      'Sempre tive receio de dentista, mas aqui me senti acolhida desde a primeira conversa. Saí mais tranquila do que cheguei.',
    name: 'Mariana R.',
    detail: 'Paciente da clínica',
    initials: 'MR',
  },
  {
    quote:
      'Explicaram cada etapa com muita calma e respeitaram meu tempo. Um atendimento humano que faz toda diferença.',
    name: 'Ana C.',
    detail: 'Paciente da clínica',
    initials: 'AC',
  },
  {
    quote:
      'Um espaço lindo e uma equipe que realmente escuta. Finalmente encontrei um lugar onde me sinto em casa.',
    name: 'Camila F.',
    detail: 'Paciente da clínica',
    initials: 'CF',
  },
]

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className={styles.section}
      id="depoimentos"
    >
      <div className={styles.inner}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Palavras de quem já veio</p>
          <h2 id="testimonials-title">
            Sorrisos mais leves começam por aqui.
          </h2>
          <p>Uma experiência diferente, contada por quem viveu.</p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <figure className={styles.card} key={testimonial.name}>
              <div aria-label="5 de 5 estrelas" className={styles.stars}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Icon key={index} name="star" />
                ))}
              </div>
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>
                <span aria-hidden="true" className={styles.avatar}>
                  {testimonial.initials}
                </span>
                <span className={styles.person}>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.detail}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
