import './App.css'

import React from 'react'

import Primeiro from './components/base/Primeiro'
import ComParametro from './components/base/ComParametro'
import Fragmento from './components/base/Fragmento'
import Random from './components/base/Random'

import Familia from './components/base/Familia'

import Card from './components/layout/Card'


export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#05 Filho" color="#00c8f8">
                    <Familia sobrenome="Snake" />
                </Card>

                {/* <Card titulo="#05 Card" border="white">
                    <h2>Criar Cards</h2>
                </Card> */}

                <Card titulo="#04 Random" color="#7fff7f" border="yellow">
                    <Random min={50} max={100} />
                </Card>

                <Card titulo="#03 Fragmento" color="#7fffff" border="red">
                    <Fragmento />
                </Card>

                <Card titulo="#02 ComParametro" color="#ffff7f">
                    <ComParametro titulo="Avaliacao" aluno="Solid Snake" nota={80.0} />
                </Card>

                <Card titulo="#01 Primeiro" color="#ff7fff" border="000">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}