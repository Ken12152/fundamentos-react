import React, { Component } from 'react'

import Button from './Button'
import Display from './Display'
import TotalForm from './TotalForm'

import genMegasena from './logic.js'

class Megasena extends Component {

    state = {
        megasena: ['?'],
        min: 1,
        max: 99,
        totalGen: 5,
    }

    generateMegasena = () => {
        this.setState({ megasena: genMegasena(this.state.min, this.state.max, this.state.totalGen)})
    }

    setTotal = valueTotal => { this.setState({ totalGen: valueTotal }) }

    render() {
        return (
            <div>
                <h2>Megasena</h2>
                <Display megasena={ this.state.megasena.join(' ') } />
                <TotalForm total={ this.state.totalGen } setTotal={ this.setTotal } />
                <Button generateMegasena={ this.generateMegasena } />
            </div>
        )
    }
}

export default Megasena