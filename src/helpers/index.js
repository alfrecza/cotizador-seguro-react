export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year
}

export function calcularMarca(marca) {
    let incremento

    switch (marca) {
        case "1":
            incremento = 1.3
            break;
        case "2" :
            incremento = 1.15
            break;
        case "3" :
            incremento = 1.05
            break; 
        default:
            break;
    }

    return incremento
}

export const calcularPlan = (plan) => {
    let incremento
    switch (plan) {
        case '1' :
            incremento = 1.2
            break;
        case '2' :
            incremento = 1.5
            break;
        default:
            break;
    }

    return incremento
}

export const formatearDinero = cantidad => {
    return cantidad.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}