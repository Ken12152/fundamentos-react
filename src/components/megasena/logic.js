function genMegasena(min, max, totalN) {
    let megasena = []

    for(let i = 0; i < totalN; ++i) {
        let rand = 0

        while(true) {
            rand = parseInt(Math.random() * (max - min + 1) + min)

            let repeated = false
            megasena.forEach(number => {
                if(number === rand) {
                    repeated = true
                }
            })

            if(repeated == false) {
                break
            }
        }

        megasena.push(rand)
    }
    return megasena.sort((a, b) => a - b)
}

export default genMegasena