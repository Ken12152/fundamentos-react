import React from 'react'

export default props => {
    const isOdd = props.num % 2 === 0

    return (
        <div>
            { isOdd ? <span>par</span> : <span>impar</span>}
        </div>
    )
}