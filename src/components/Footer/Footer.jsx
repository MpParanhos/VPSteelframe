import './styles.css'
import React from 'react'

function Footer(){

  return(
    <div className='footer'>
      <p>VP Steel Frame - Estruturas metálicas <i class="fa-regular fa-registered"></i></p>
      <p><i class="fa-solid fa-location-dot"></i> Via Francisco Boti, nº 728 | Pinhal, Cabreúva - SP</p>
      <p className='break'></p> 
      <p>Contatos:</p>
      <p className='break'></p>
      <div className='contactFooter'>
      <p>Vilmar - (11) 99861-7254</p>
      <p className='co1'>Rodrigo - (11) 91014-8661</p>
      </div>
      <p className='break'></p> 
      <p>Email: vilmar@vpsteelframe.com.br</p>   
    </div>
  )
}

export default Footer