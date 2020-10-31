import React from 'react'

export default props => {
    const { min, max } = props

    const random = Math.ceil(Math.random() * (max - min) + min)

    return (
        <div>
            <h1>Random</h1>
            <p>Min: { min }</p>
            <p>Max: { max }</p>
            <p>Random: { random }</p>
        </div>
    )
}