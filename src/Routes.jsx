import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Servicos from './pages/Servicos'
import Trabalhos from './pages/TrabalhosRealizados'

function Rotas() {

  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='/Servicos' element={<Servicos />} />
        <Route path='/Trabalhos' element={<Trabalhos />} />
      </Routes>
    </BrowserRouter>
  )

}

export default Rotas