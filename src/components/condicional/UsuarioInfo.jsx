import React from 'react'

import If from './if'
import { Else } from './if'

export default props => {
    const usuario = props.usuario || {}

    return (
        <div>
            <If cond={ usuario && usuario.nome }>
                <p>{ usuario.nome }</p>
                <Else>
                    <p>Nobody</p>
                </Else>
            </If>
        </div>
    )
}