import { Link } from 'react-router-dom'
export default function Registros() {
  return (
    <div className='flex justify-between'>
       <h2>Todos los registros:</h2>
       <Link to="registro/nuevo" className='rounded-md bg-indigo-400 p-3 font-bold text-white shadow-sm hover:bg-indigo-800'>Regres a registros </Link>
    </div>
  )
}
