import './App.css'
import Navbar from './assets/complements/navbar/Navbar'
import ItemListContainer from './assets/complements/itemlistcontainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./assets/complements/itemdetailcontainer/ItemDetailContainer"

function App() {


  return (
    <div>

      <BrowserRouter>

        <Navbar />

        <div className="background">

          <Routes>

          <Route path="/" element={<ItemListContainer welcome="Bienvenidos a Tabula Rasa"/>} />
          <Route path='/type/:idType' element={<ItemListContainer welcome="Bienvenidos a Tabula Rasa"/>} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />

          </Routes>

        </div>


      </BrowserRouter>

    </div>
  )
}

export default App
