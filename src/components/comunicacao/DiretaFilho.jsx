import React from 'react'

export default props => {
    return (
        <div>
            <span>{ props.nome }: </span>
            <span>{ props.idade } </span>
        </div>
    )
}