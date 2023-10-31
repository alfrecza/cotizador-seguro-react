export const Marcas = [
    {id: 1, nombre: 'Europeo'},
    {id: 2, nombre: 'Americano'},
    {id: 3, nombre: 'Asiatico'}
]


//Me devuelve un array con los ultimos 20 años
export const getYears = () => {
    let year = new Date().getFullYear()
    let years = []
    for(let i = year; i > year-20; i--) {
        years.push(i)
    }

    return years
}

export const Planes = [
    {id: 1, nombre: 'Básico'},
    {id: 2, nombre: 'Completo'}
]