import './App.css'

import React from 'react'

// Base
import Primeiro from './components/base/Primeiro'
import ComParametro from './components/base/ComParametro'
import Fragmento from './components/base/Fragmento'
import Random from './components/base/Random'

// Base -> Membro
import Familia from './components/base/Familia'
import FamiliaMembro from './components/base/FamiliaMembro'

// Layout Card 
import Card from './components/layout/Card'

// Repeticao
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelasAlunos from './components/repeticao/TabelasAlunos'

// Condicional
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

// Comunicacao
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'

// formulario
import Input from './components/formulario/Input'

// Contador
import Contador from './components/contador/Contador'

// Megasena
import Megasena from './components/megasena/Megasena'


export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#13 Megasena">
                    <Megasena />
                </Card>
                    
                <Card titulo="#12 Contador" color="#424242" border="#424242">
                    <Contador numeroInicial={12}/>
                </Card>

                <Card titulo="#11 Comunicacao Controlado">
                    <Input />
                </Card>

                <Card titulo="#10 Comunicacao Indireta">
                    <IndiretaPai />
                </Card>

                <Card titulo="#09 Comunicacao Direta">
                    <DiretaPai />
                </Card>

                <Card titulo="#08 If">
                    <UsuarioInfo usuario={{ nome: 'Raiden' }} />
                    <UsuarioInfo usuario={{ email: 'Raiden@gmail.com' }} />
                    <UsuarioInfo usuario={{ nome: 'Snake' }} />
                </Card>

                <Card titulo="#08 Condicional">
                    <ParOuImpar num={7} />
                </Card>
                    
                <Card titulo="#07 Desafio Repeticao">
                    <TabelasAlunos />
                </Card>

                <Card titulo="#06 Repeticao">
                    <ListaAlunos />
                </Card>

                <Card titulo="#05 Filho" color="#00c8f8">
                    <Familia sobrenome="Snake">
                        <FamiliaMembro nome="Naked" />
                        <FamiliaMembro nome="Solid" />
                        <FamiliaMembro nome="Liquid" />
                        <FamiliaMembro nome="Solidas" />
                    </Familia>
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