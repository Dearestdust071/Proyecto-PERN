import { useState } from 'react'
import './App.css'
import ProductForms from './Components/ProductForms'
import ProductList from './Components/ProductList'
import Header from './Components/header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <ProductForms></ProductForms>
      {/* <ProductList></ProductList> */}
    </>
  )
}

export default App
