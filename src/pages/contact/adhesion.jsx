import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import WhiteBox from '../../components/WhiteBox'
import { Helmet } from 'react-helmet'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <WhiteBox>
            <Helmet>
              <title>Contact | SFPR</title>
              <meta
                name="description"
                content="Si vous souhaitez nous contacter, remplissez le formulaire suivant."
              />
            </Helmet>

            <h1 className="title is-2">Devenir sociétaire</h1>
            <h2 className="title is-5">Comment devenir sociétaire ?</h2>

            <p className="mb-7 content">
              <strong> Les conditions :</strong>
              <ul>
                <li>Être titulaire d'un doctorat en philosophie.</li>
                <li>
                  Être engagé dans un programme de recherche (Post doctorat
                  etc.) ou avoir un rattachement dans l'enseignement supérieur
                  (Maitre de Conférence, Professeur ou équivalent).
                </li>
                <li>La cotisation est fixée à 25 €.</li>
              </ul>
              <div className="my-5">
                <strong> La procédure :</strong> Remplir une demande d'adhésion
                grâce au <strong>formulaire ci-dessous </strong>et le conseil
                scientifique évaluera votre demande.
              </div>
            </p>
            <form
              name="adhesion"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>

              <div className="field">
                <label className="mb-5 has-text-weight-bold" htmlFor={'name'}>
                  Votre nom et prénom :
                </label>
                <div className="control mt-3 mb-6">
                  <input
                    className="input"
                    type={'text'}
                    name={'name'}
                    onChange={this.handleChange}
                    id={'name'}
                    required={true}
                  />
                </div>
              </div>

              <div className="field">
                <label className="mb-5 has-text-weight-bold" htmlFor={'name'}>
                  Lieu du Doctorat et année :
                </label>
                <div className="control mt-3 mb-6">
                  <input
                    className="input"
                    type={'text'}
                    name={'doctorat'}
                    id={'doctorat'}
                    onChange={this.handleChange}
                    required={true}
                  />
                </div>
              </div>

              <div className="field">
                <label className="mb-5 has-text-weight-bold" htmlFor={'name'}>
                  Affiliation actuelle :
                </label>
                <div className="control mt-3 mb-6">
                  <input
                    className="input"
                    type={'text'}
                    name={'affiliation'}
                    id={'affiliation'}
                    onChange={this.handleChange}
                    required={true}
                  />
                </div>
              </div>

              <div className="field">
                <label className="mb-5 has-text-weight-bold" htmlFor={'email'}>
                  Votre addresse e-mail :
                </label>
                <div className="control mt-3 mb-6">
                  <input
                    className="input"
                    type={'email'}
                    name={'email'}
                    onChange={this.handleChange}
                    id={'email'}
                    required={true}
                  />
                </div>
              </div>

              <div className="field">
                <label
                  className="mb-5 has-text-weight-bold"
                  htmlFor={'message'}
                >
                  En quelques mots, sur quelles questions liées à la société
                  travaillez-vous ?
                </label>
                <div className="control mt-3 mb-6">
                  <textarea
                    className="textarea"
                    name={'message'}
                    onChange={this.handleChange}
                    id={'message'}
                    required={true}
                  />
                </div>
              </div>

              <div className="field">
                <button className="button is-link" type="submit">
                  Envoyer
                </button>
              </div>
            </form>
          </WhiteBox>
        </div>
      </Layout>
    )
  }
}
