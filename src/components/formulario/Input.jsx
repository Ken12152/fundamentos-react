import React, { useState } from 'react'

export default props => {
    const [value, setValue] = useState('inicial')

    function onChange(e) {
        setValue(e.target.value)
    }

    return (
        <div>
            <h2>{ value }</h2>
            <input value={ value } onChange={ onChange } style={{ fontSize: '1.0rem' }} />
            <input value={ value } readOnly  style={{ fontSize: '1.0rem' }} />
            <input value={ undefined } placeholder={ 'undefined' } style={{ fontSize: '1.0rem' }} />
        </div>
    )
}
