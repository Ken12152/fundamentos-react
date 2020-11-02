import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="total">total: </label>
            <input
                id="total"
                type="number"
                value={ props.total }
                onChange={ e => props.setTotal( +e.target.value )}
            />
        </div>
    )
}