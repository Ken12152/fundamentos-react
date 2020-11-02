import React from 'react'

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

    setPasso = e => {
        this.setState({ passo: +e.target.value })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <p>{ this.state.numero }</p>
                <div style={{ margin: '5px' }}>
                    <label htmlFor="passo">Passo: </label>
                    <input id="passo" type="number" value={ this.state.passo } onChange={ this.setPasso } />
                </div>
                <button onClick={ this.inc }>+</button>
                <button onClick={ this.dec }>-</button>
            </div>
        )
    }
}

export default Contador