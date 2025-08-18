import React from 'react'
import { Link, Form , ActionFunctionArgs, useActionData} from 'react-router-dom'
import ErrorMessage from '../Components/ErrorMessage'


export async function action({request}: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  let error = ''
  if(Object.values(data).includes('')){
    error = "Todos los campos son obligatorios"
  }
  if(error.length){
    console.log(error)
    return error
  }
  return {}
}
export default function NuevoRegistro() {

  const error = useActionData () as String;



  return (
    <div>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      <h2 className='text-4xl font-black text-slate-500 '> REGISTRAR </h2>
      {/* <Link to="/" className='rounded-md bg-indigo-400 p-3 font-bold text-white shadow-sm hover:bg-indigo-800'>Agregar registros</Link> */}


      <Form className="mt-10 space-y-4 " method='POST' >
        <div className='mb-4'>
        <label htmlFor="" className='text-gray-800'>Nombre registro</label>
        <input  id='name'
        className='mt-2 block w-full p-3 bg-gray-50'
        placeholder='Nombre del registro'
        name='name'
        type="text" />
        </div>
        <div className='mb-4'>
        <label htmlFor="" className='text-gray-800'>Numero registro</label>
        <input  id='number'
        className='mt-2 block w-full p-3 bg-gray-50'
        placeholder='Ej. 100, 200, 400'
        name='number'
        type="number" />
        </div>
        <input type="submit" 
        className='mt-5 w-full bg-indigo-500 text-white font-bold text-lg cursor-pointer rounded'
        value="Generar registro" />
        <Link to="/" className='rounded-md bg-indigo-400 p-3 font-bold text-white shadow-sm hover:bg-indigo-800'>Agregar registros</Link>
      </Form>


    </div>
  )
}