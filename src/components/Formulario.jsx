import { useState } from "react"
import Alerta from '../components/Alerta'
import { Marcas, getYears, Planes } from "../constants"
import useCotizador from "../hooks/useCotizador"

const Formulario = () => {
    const {handleChangeDatos, datos, alerta, setAlerta, cotizarSeguro} = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')) {
            setAlerta(true)
            return
        }

        setAlerta(false)
        cotizarSeguro()
    }

  return (
    <>
        {alerta && <Alerta tipo="error">Todos los campos son obligatorios</Alerta>}

        <form action="" onSubmit={handleSubmit}>
            <div className="my-5">
                <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                <select value={datos.marca} name="marca" id="" className="w-full p-3 bg-white border border-gray-200 text-gray-800" onChange={e => handleChangeDatos(e)}>
                    <option value="">-- Selecciona marca --</option>
                    {Marcas?.map(marca => (
                        <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
                <select value={datos.year} name="year" id="" className="w-full p-3 bg-white border border-gray-200 text-gray-800" onChange={e => handleChangeDatos(e)}>
                    <option value="">-- Selecciona año --</option>
                    {getYears()?.map(yearArray => (
                        <option key={yearArray} value={yearArray}>{yearArray}</option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label htmlFor="plan" className="block mb-3 font-bold text-gray-400 uppercase">Plan</label>
                <select value={datos.plan} name="plan" id="" className="w-full p-3 bg-white border border-gray-200 text-gray-800" onChange={e => handleChangeDatos(e)}>
                    <option value="">-- Selecciona un plan --</option>
                    {Planes?.map(plan => (
                        <option key={plan.id} value={plan.id}>{plan.nombre}</option>
                    ))}
                </select>
            </div>

            <input type="submit" className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"/>
        </form>
    </>
  )
}

export default Formulario