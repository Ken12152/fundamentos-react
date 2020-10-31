import React from 'react'

import Primeiro from './components/base/Primeiro'
import ComParametro from './components/base/ComParametro'
import Fragmento from './components/base/Fragmento'
import Random from './components/base/Random'

export default function App(props) {
    return (
        <div>
            <h1>Fundamentos React</h1>
            <Random min={50} max={100} />
            <Fragmento />
            <ComParametro titulo="Avaliacao" aluno="Solid Snake" nota={80.0} />
            <Primeiro></Primeiro> 
        </div>
    )
}