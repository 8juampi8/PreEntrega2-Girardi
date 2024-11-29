import './App.css'
import Navbar from './assets/complements/navbar/Navbar'
import ItemListContainer from './assets/complements/itemlistcontainer/ItemListContainer'

function App() {


  return (
    <div>
      <Navbar />

      <ItemListContainer welcome="¡Bienvenido a Tabula Rasa!"/>
    </div>
  )
}

export default App
