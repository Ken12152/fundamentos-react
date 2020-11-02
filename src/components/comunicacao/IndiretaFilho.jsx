import React from 'react'

export default props => {
    const idade = parseInt(Math.random() * 12) + 18
    const nerd = Math.random() > 0.5 ? true : false

    return (
        <div>
            <div>Filho</div>
            {/* <button onClick={function (e) {
                props.clicked('Raiden', 26, true)
            }}>
                Fornecer Informacoes
            </button>  */}

            <button onClick={ (e) => props.clicked('Raiden', idade, nerd)}>
                Fornecer Informacoes
            </button> 
        </div>
    )
}