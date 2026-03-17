function calcularTaxa(valor) {
    if (valor > 500) {
        return valor * 1.05
    } else {
        return valor
    }
} 

module.exports = calcularTaxa