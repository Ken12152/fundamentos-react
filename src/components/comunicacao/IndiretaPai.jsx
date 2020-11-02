import React, { useState } from 'react'

import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = useState('?????')
    const [idade, setIdade] = useState('??')
    const [nerd, setNerd] = useState(false)

    function fornecerInfo(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
        // console.log(nome, idade, nerd)
    }

    return (
        <div>
            <div>Pai</div>
            <span>{ nome } { idade } { nerd ? 'True' : 'False' }</span>
            <IndiretaFilho clicked={ fornecerInfo }/>
        </div>
    )
}