import React from 'react'

import IndiretaFilho from './IndiretaFilho'

export default props => {
    function fornecerInfo(nome, idade, nerd) {
        console.log(nome, idade, nerd)
    }

    return (
        <div>
            <span>Pai</span>
            <IndiretaFilho clicked={ fornecerInfo }/>
        </div>
    )
}