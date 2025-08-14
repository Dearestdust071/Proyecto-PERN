import React from 'react'
import { Link } from 'react-router-dom'
export default function NuevoRegistro() {
  return (
    <div>
      Registros
      <Link to="/" className='rounded-md bg-indigo-400 p-3 font-bold text-white shadow-sm hover:bg-indigo-800'>Agregar registros</Link>
       
    </div>
  )
}
