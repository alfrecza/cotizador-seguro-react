
const Alerta = ({tipo, children}) => {

    return(
        <div className={tipo === 'error' ? 'bg-red-600 py-4' : 'bg-green-600 py-4'}>
            <p className="font-bold text-white text-center uppercase">{children}</p>
        </div>
    )
}

export default Alerta