import {createContext, useState} from 'react';
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers';

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {
    
    const [alerta, setAlerta] = useState(false)
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan:''
    })
    
    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {
        // Una base
        let resultado = 2000

        //Obtener diferencia de año
        const diferencia = obtenerDiferenciaYear(datos.year)
        //Hay que restar el 3% por cada año
        resultado -= ((diferencia *3) * resultado) / 100

        //Europeo 30%
        //Americano 15%
        //Asiatico 5%
        resultado *= calcularMarca(datos.marca) 
        //Basico 20%
        //Completo 50%
        resultado *= calcularPlan(datos.plan)
        setCargando(true)
        setTimeout(() => {
            setCargando(false)
            setResultado(formatearDinero(resultado))
        }, 3000);
        

    }

    return(
        <CotizadorContext.Provider value={{
            handleChangeDatos,
            datos,
            alerta,
            setAlerta,
            cotizarSeguro,
            resultado,
            cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext