import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../styles/home.scss"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const {
    male1Persona,
    female1Persona,
    female2Persona,
    sliderImage,
  } = useStaticQuery(graphql`
    query {
      sliderImage: file(relativePath: { eq: "sliderCodeImage.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 631) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      male1Persona: file(relativePath: { eq: "male1.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      female1Persona: file(relativePath: { eq: "female1.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      female2Persona: file(relativePath: { eq: "female2.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <section className="slider">
        <Img fluid={sliderImage.childImageSharp.fluid} />
        <div className="textOverlap">#CODA</div>
      </section>
      <section className="gradient-background">
        <div className="container text-white">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <p className="h5 mb-4 displ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptater.
              </p>
              <button className="saibaMaisButton">Saiba mais</button>
            </div>
          </div>
          <div className="row no-gutters mb-5 pt-lg-4">
            <ul className="col-12 d-flex flex-wrap">
              <li className="col-12 col-md-6 col-lg-4 text-center d-flex flex-column justify-content-start align-items-center mb-4 mb-lg-0">
                <Img fixed={male1Persona.childImageSharp.fixed} />
                <p className="mt-2">Inovador</p>
                <p className="h2 font-weight-bold">Antonio Frontier</p>
                <p className="h5">HTML</p>
                <p>
                  "Trabalhar com HTML é como ser arquiteto com código,
                  permitindo que uma mensagem seja transmitida de forma
                  eficientee inteligível."
                </p>
              </li>
              <li className="col-12 col-md-6 col-lg-4 text-center d-flex flex-column justify-content-center align-items-center mb-4 mb-lg-0">
                <Img fixed={female2Persona.childImageSharp.fixed} />
                <p className="mt-2">Pensador</p>
                <p className="h2 font-weight-bold">Julia</p>
                <p className="h5">Javascript</p>
                <p>
                  "Acho que executar funções no front trabalhando conteúdo e
                  visual são a forma mais eficiente de proporcionar integração e
                  interação com os usuários."
                </p>
              </li>
              <li className="col-12 col-md-6 col-lg-4 text-center d-flex flex-column justify-content-center align-items-center">
                <Img fixed={female1Persona.childImageSharp.fixed} />
                <p className="mt-2">Sentimental</p>
                <p className="h2 font-weight-bold">Ceise</p>
                <p className="h5">CSS</p>
                <p>
                  "Vejo as folhas de estilo como tinta, pincel e movimento, com
                  os quais posso entregar ao usuário o visual planejado pela
                  equipe, com interações eficientes."
                </p>
              </li>
            </ul>
          </div>
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="h1">23% são Inovadores</h2>
              <h2 className="h1 font-weight-bold">Qual é o seu perfil?</h2>
            </div>
          </div>
          <div className="row mb-5 justify-content-center">
            <div className="col-11 mb-5">
              <div className="row text-center text-md-left justify-content-between align-items-center">
                <div className="col-12 col-md-4 col-lg-3 h2 py-3 mb-3 mb-md-0 horizontalTextCard text-md-right">
                  Busca capacitação constante
                </div>
                <div className="col-12 col-md-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolor.
                </div>
              </div>
            </div>
            <div className="col-11">
              <div className="row text-center text-md-left justify-content-between align-items-center">
                <div className="col-12 col-md-4 col-lg-3 h2 py-3 mb-3 mb-md-0 horizontalTextCard text-md-right">
                  Gosta de aprender
                </div>
                <div className="col-12 col-md-8">
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim
                  id.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
