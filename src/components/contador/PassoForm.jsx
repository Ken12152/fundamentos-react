import React from 'react'

export default props => {
    return (
        <div style={{ margin: '5px' }}>
            <label htmlFor="passo">Passo: </label>
            <input 
                id="passo" 
                type="number" 
                value={ props.passo } 
                onChange={ e => props.setPasso(+e.target.value) } 
            />
        </div>
    )
}