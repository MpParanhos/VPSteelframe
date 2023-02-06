import '../Header/styles.css'
import {Link} from 'react-router-dom'
import Logo from '../../Assets/Images/logo.jpg'

function Header() {
    
  return(

    <div>
      <header className='banner-container'>
        <Link to='/'>
        <img 
        src={Logo}
        alt="logo" 
        className='banner'
        />
        </Link>
      </header>
      <div className='nav'>
        <Link to="/"> <button className="firstb"> Home </button> </Link>
        <Link to='/Servicos'> <button> Serviços </button> </Link>
        <Link to='/Trabalhos'><button> Trabalhos Realizados </button></Link>
        <Link to='/Contato'><button className='lastb'> Contato </button></Link>
      </div>
    </div>
  )

}

export default Header