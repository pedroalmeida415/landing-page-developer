import { Formik } from "formik"
import React from "react"
import InputMask from "react-input-mask"
import * as Yup from "yup"
import "../styles/footer.scss"

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Este campo é obrigatório"),
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Este campo é obrigatório"),
  cellphone: Yup.string().required("Este campo é obrigatório"),
})

const Footer = () => (
  <footer className="footer">
    <div className="container mb-4">
      <div className="row flex-column justify-content-between flex-lg-row">
        <div className="col-12 mb-4 mb-lg-0 col-lg-6">
          <p className="h5 mb-4 text-white">
            A poucos metros do Metrô Santa Cruz.
          </p>
          <iframe
            title="metro santa cruz - SP"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1513503619763!2d-46.639021785364264!3d-23.59890436886407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a33d4d887c5%3A0x1561cee36c26c0a5!2sSanta%20Cruz!5e0!3m2!1spt-BR!2sbr!4v1600718743075!5m2!1spt-BR!2sbr"
            width="100%"
            height="330"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
          ></iframe>
        </div>
        <div className="col-12 text-white col-lg-5">
          <h6 className="mb-4 text h4">Envie sua mensagem</h6>
          <Formik
            initialValues={{
              name: "",
              email: "",
              cellphone: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(
                  `Mensagem enviada com sucesso, fique de olho no seu e-mail: ${values.email}`
                )
                actions.setSubmitting(false)
                actions.resetForm()
              }, 1500)
            }}
          >
            {({
              values,
              errors,
              isSubmitting,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <label className="d-block " htmlFor="name">
                  Seu nome *
                </label>
                <input
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="d-block text-dark w-100 text-input"
                  type="text"
                />
                {errors.name && touched.name && (
                  <span className="errorMessage">{errors.name}</span>
                )}
                <label className="d-block" htmlFor="email">
                  Seu e-mail *
                </label>
                <input
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="d-block text-dark w-100 text-input"
                  type="text"
                />
                {errors.email && touched.email && (
                  <span className="errorMessage">{errors.email}</span>
                )}
                <label className="d-block" htmlFor="cellphone">
                  Seu telefone *
                </label>
                <InputMask
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cellphone}
                  id="cellphone"
                  className="d-block text-dark w-100 text-input"
                  type="text"
                  mask="(99) 99999-9999"
                  maskChar=""
                />
                {errors.cellphone && touched.cellphone && (
                  <span className="errorMessage">{errors.cellphone}</span>
                )}
                <div className="d-flex justify-content-end">
                  <button
                    disabled={isSubmitting}
                    className="text-uppercase submitButton"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            )}
          </Formik>
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
