import React from 'react'

import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Otakon" idade={39} />
            <DiretaFilho nome="Cambell" idade={53} />
        </div>
    )
}