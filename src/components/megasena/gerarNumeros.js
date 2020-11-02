function gerarNumeroNaoContido(min, max, array) {
    const aleatoria = parseInt(Math.random() * (max - min + 1)) + min
    return array.includes(aleatoria) ? 
        gerarNumeroNaoContido(min, max, array) : aleatoria
}

function gerarNumeros(min, max, qtd) {
    let array = (Array(qtd)
        .fill(0)
        .reduce((acc) => {
            let aleatoria = gerarNumeroNaoContido(min, max, acc)
            console.log([ ...acc, aleatoria ])
            return [ ...acc, aleatoria ]
        }, [])
        .sort((a, b) => a - b)
    )

    return array
}

let min = 1
let max = 5
let quantidade = 5

console.log(gerarNumeros(min, max, quantidade))
