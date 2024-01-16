import React from "react"
import Header from "../../components/Header/header"
import "./styles.css"
import ExpanelServ from "../../components/ExpansionPanelServ/ExpanelServ";
import Galpao from '../../Assets/Images/galpao.jpg'
import Footer from "../../components/Footer/Footer";

function Servicos() {

  return (
    <div>
      <Header />
      
      <h1 className='title'>Conheça nossos serviços</h1>
      <div>
        <h3 className="title">
          Porque usar estruturas metálicas? <br />

          Algumas das vantagens da estrutura metálica são: </h3>
          
        <ExpanelServ />  

        <div className="imageMoldure">
          <img src={Galpao} className="image" alt="Imagem da montagem de um galpão" />
        </div>

        <div className="capsule">
          <div className="end">
            <strong> Por que fazer um orçamento? </strong> <br />
            Por necessitar de peças pré-moldadas provindas das fabricas se faz uma importância maior ter um bom projeto e profissionais de qualidade para se efetuarem o projeto, pelo fato dessas estruturas não permitirem "improvisações".
            Faça um orçamento agora mesmo.
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Servicos