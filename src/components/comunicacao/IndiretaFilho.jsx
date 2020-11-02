import React from 'react'

export default props => {
    return (
        <div>
            <p>Filho</p>
            {/* <button onClick={function (e) {
                props.clicked('Raiden', 26, true)
            }}>
                Fornecer Informacoes
            </button>  */}

            <button onClick={ (e) => props.clicked('Raiden', 26, true)}>
                Fornecer Informacoes
            </button> 
        </div>
    )
}