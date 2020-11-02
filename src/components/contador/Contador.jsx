import React from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'


class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 12,
        passo: this.props.passoInicial || 1
    }

    inc = _ => {
        this.setState({ numero: this.state.numero + this.state.passo })
    }

    dec = _ => {
        this.setState({ numero: this.state.numero - this.state.passo })
    }

    setPasso = (valorPasso) => {
        this.setState({ passo: valorPasso })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <Display numero={ this.state.numero } />
                <PassoForm passo={ this.state.passo } setPasso={ this.setPasso } />
                <Botoes setInc={ this.inc } setDec={ this.dec } />
            </div>
        )
    }
}

export default Contador
