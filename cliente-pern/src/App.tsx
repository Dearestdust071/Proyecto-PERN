import { useState } from 'react'
import './App.css'
import ProductForms from './Components/ProductForms'
import ProductList from './Components/ProductList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ProductForms></ProductForms> */}
      <ProductList></ProductList>
    </>
  )
}

export default App
