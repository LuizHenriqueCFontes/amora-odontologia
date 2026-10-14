import { useState, type FormEvent } from 'react'
import { Icon } from './Icon'
import styles from './Contact.module.css'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section aria-labelledby="contact-title" className={styles.section} id="contato">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Seu próximo sorriso começa aqui</p>
          <h2 id="contact-title">
            Vamos conversar sobre <span>você?</span>
          </h2>
          <p className={styles.description}>
            Preencha seus dados e escolha como podemos ajudar. Será um prazer
            receber você.
          </p>
          <div className={styles.detail}>
            <span className={styles.detailIcon}>
              <Icon name="clock" />
            </span>
            <span>
              <strong>Atendimento com hora marcada</strong>
              <small>Segunda a sexta, das 8h às 18h</small>
            </span>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formHeading}>
            <h3>Agende sua avaliação</h3>
            <p>Conta um pouquinho pra gente.</p>
          </div>
          <label className={styles.field}>
            Seu nome
            <input
              autoComplete="name"
              name="name"
              placeholder="Como podemos chamar você?"
              required
            />
          </label>
          <div className={styles.fieldRow}>
            <label className={styles.field}>
              Seu telefone
              <input
                autoComplete="tel"
                name="phone"
                placeholder="(00) 00000-0000"
                required
                type="tel"
              />
            </label>
            <label className={styles.field}>
              O que você procura?
              <select defaultValue="" name="service" required>
                <option disabled value="">
                  Escolha um tratamento
                </option>
                <option>Clínica geral</option>
                <option>Clareamento</option>
                <option>Ortodontia</option>
                <option>Implantes</option>
                <option>Estética dental</option>
                <option>Odontopediatria</option>
                <option>Ainda não sei</option>
              </select>
            </label>
          </div>
          <button className={styles.submit} type="submit">
            Solicitar contato <Icon name="arrow" />
          </button>
          {submitted && (
            <p aria-live="polite" className={styles.notice} role="status">
              Esta é uma demonstração: nenhum dado foi enviado. Conecte o
              formulário ao canal de atendimento da clínica para ativar os
              agendamentos.
            </p>
          )}
          <p className={styles.privacy}>
            Seus dados serão usados apenas para entrar em contato sobre o
            atendimento.
          </p>
        </form>
      </div>
    </section>
  )
}
