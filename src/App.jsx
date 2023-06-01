import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import CardUser from './components/CardUser/CardUser'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Header />
      </div>
      <div>
      <NavBar />
      </div>
      <div>
        <ItemListConteiner gretting="Aprovecha esta Semana de Hot Week" />
      </div>
      <div className='UserSection'>
      <CardUser   
        name="Sweater Pilot" 
        description="Talles: M - L - XL" 
        img="https://equus.vtexassets.com/arquivos/ids/226875-500-auto?v=637813129029730000&width=500&height=auto&aspect=true"
      />
      <CardUser   
        name="Campera Americana" 
        description="Talles: M - L - XL" 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0OrSU67Ak0Z3WeEduoB9KKEQ4jWVbYX6HA&usqp=CAU"
      />
      <CardUser   
        name="Buso Casual" 
        description="Talles: M - L - XL" 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBt07mPJbk7qIvTkAakR5yg-FmLBrkG9BggA&usqp=CAU"
      />
      </div>
    </>
  )
}

export default App
