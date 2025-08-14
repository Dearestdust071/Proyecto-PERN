import { useState } from 'react'
import './App.css'
import ProductForms from './Components/ProductForms'
import ProductList from './Components/ProductList'
import Header from './Components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-2xl text-center">Hola reaprobados.</h1>
      {/* <Header></Header>
      <ProductForms></ProductForms> */}
      {/* <ProductList></ProductList> */}
    </>
  )
}

export default App
