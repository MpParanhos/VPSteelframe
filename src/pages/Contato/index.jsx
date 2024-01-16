import './styles.css';
import Header from '../../components/Header/header';
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import Footer from '../../components/Footer/Footer';

function Contato() {
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      tel: tel,
      email: email,
      assunto: assunto,
      message: message
    }

    emailjs.send('service_av4kux7', 'template_5p4xhvn', templateParams, '-51Fowduja6INvFsj')
      .then((response) => {
        alert('Email enviado com sucesso! ', response.status, response.text)
        setName('')
        setAssunto('')
        setEmail('')
        setMessage('')
        setTel('')
      }, (error) => {
        alert('Erro: ', error)
      })
  }

  return (
    <div>
      <Header />
      <h1 className='title'>Contato</h1>
      <div className='container'>
        <div id='content'>
          <div className='fields'>
            <fieldset>
              <legend className='formTitle'>Nos envie um email</legend>
              <form className='formulario' onSubmit={sendEmail}>
                <label htmlFor="nome" className='gname'>Nome:</label>
                <input
                  type="text"
                  placeholder='Digite seu nome.'
                  className='gnamei'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <label htmlFor="telefone" className='gtel'>Telefone:</label>
                <input
                  type="text"
                  placeholder='Digite apenas números.'
                  className='gteli'
                  maxLength={11}
                  onChange={(e) => setTel(e.target.value)}
                  value={tel}
                  required
                />
                <label htmlFor="email" className='gmail'>E-Mail:</label>
                <input
                  type="email"
                  className='gmaili'
                  placeholder='Digite seu email.'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <label htmlFor="assunto" className='gass'>Assunto:</label>
                <input
                  type="text"
                  placeholder='Digite o assunto.'
                  className='gassi'
                  onChange={(e) => setAssunto(e.target.value)}
                  value={assunto}
                  required
                />
                <label htmlFor="mensagem" className='gmen'>Mensagem:</label>
                <textarea
                  name="mensagem"
                  cols="60"
                  rows="10"
                  className='gmeni'
                  placeholder='Digite sua mensagem.'
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
                >
                </textarea>  <br />
                <input type="submit" value="Enviar" className='gsend' />
              </form>
            </fieldset>
          </div>
        </div>
        <div className='contact-area2'>
          <ul className='contact2'>
            <p className='wpp'> Atendimento Whatsapp </p> <br />
            <li>
              <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511998617254" target="_blank">
                <i class="fa-brands fa-whatsapp"></i>
                11 99861-7254</a>
            </li>
            <li>
              <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511910148661" target="_blank">
                <i class="fa-brands fa-whatsapp"></i>
                11 91014-8661</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )

}

export default Contato
