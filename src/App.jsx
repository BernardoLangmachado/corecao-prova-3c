import './App.css'
import Evento from './components/Evento.jsx'
import Galeria from './components/Galeria.jsx'
import Cabecalho from './cabecalho.jsx'
import Rodape from './components/Rodape.jsx'


function App() {

  return (
    <>
    <Cabecalho/>
      <Evento
        titulo={"Evento TØP"}
        descricao={"Descrição do evento"}
        horario={"29/04/2024 as 11 horas"}
        local={"LolaPaluza, Rio de janeiro"} />
        <Galeria/>
        <Rodape />  
    </>
    
  )
}

export default App
