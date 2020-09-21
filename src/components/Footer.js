import React from "react"
import InputMask from "react-input-mask"
import "../styles/footer.scss"

const Footer = () => (
  <footer className="footer">
    <div className="container mb-4">
      <div className="row flex-column justify-content-between flex-lg-row">
        <div className="col-12 mb-4 mb-lg-0 col-lg-6">
          <p className="h5 mb-4 text-white">
            A poucos metros do Metrô Santa Cruz.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1513503619763!2d-46.639021785364264!3d-23.59890436886407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a33d4d887c5%3A0x1561cee36c26c0a5!2sSanta%20Cruz!5e0!3m2!1spt-BR!2sbr!4v1600718743075!5m2!1spt-BR!2sbr"
            width="100%"
            height="330"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div className="col-12 text-white col-lg-5">
          <h6 className="mb-4 text h4">Envie sua mensagem</h6>
          <form>
            <label className="d-block " htmlFor="name">
              Seu nome *
            </label>
            <input className="d-block text-dark w-100 text-input" type="text" />
            <label className="d-block" htmlFor="name">
              Seu e-mail *
            </label>
            <input className="d-block text-dark w-100 text-input" type="text" />
            <label className="d-block" htmlFor="name">
              Seu telefone *
            </label>
            <InputMask
              className="d-block text-dark w-100 text-input"
              type="text"
              mask="(99) 99999-9999"
              maskChar=""
            />
            <div className="d-flex justify-content-end">
              <button className="text-uppercase submitButton" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 text-white text-center">Cinetica.ag - 2020@</div>
      </div>
    </div>
  </footer>
)

export default Footer
