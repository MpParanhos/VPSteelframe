import './styles.css';
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom'
import Image1 from '../../Assets/Images/ex.png'


function Home() {

  return (
    <div>
      <Header />
      <h1 className='title'>VP Steel Frame | Estruturas Metálicas – Jundiaí e Região</h1>
      <div id='content'>
        <span className='content1'>A VP Steel Frame é uma empresa na 
          Área de Construção Civil e trabalha com Estruturas Metálicas em Jundiaí e Região.
          <br /> <br />
          Temos grande experiência no mercado e oferecemos soluções sob medida para sua obra,
          sempre prezando pela qualidade e com grande agilidade de execução.
        </span>
          <div className='contact-area'>
            <ul className='contact'>
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
              <br />
              <Link to='/Contato'><li><i class="fa-solid fa-envelope"></i>Orçamento</li></Link>
            </ul>
          </div>
        </div>
      <div id='content'>
        <div className='more'>
          <Link to='/Trabalhos'><img src={Image1} alt="Imagem da montagem de um telhado" /></Link>
        </div>
      </div> 
      <Footer/>
    </div>
  ) 
  
}

export default Home
