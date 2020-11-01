import React from 'react'

import './Card.css'

export default props => {
    const cardStyle = {
        backgroundColor: props.color || "#ff8989",
    }

    const borderColor = {
        borderColor: props.border || "ffa3a3",
    }

    return (
        <div className="Card" style={ borderColor }>
            <div className="Titulo" style={ cardStyle }>{ props.titulo }</div>
            <div className="Conteudo">
                { props.children }
            </div>
        </div>
    )
}