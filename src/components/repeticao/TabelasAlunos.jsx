import React from 'react'

import alunos from '../../data/alunos'

export default props => {
    const tableStyle = { width: '100%' }

    const thStyle = { backgroundColor: 'cyan' }

    const trEven = { backgroundColor: '#ddd' }
    const trOdd = { backgroundColor: '#eee' }

    const alunosTB = alunos.map((aluno, i) => {
        return (
            <tr key={ aluno.id } style={ !(i % 2) ? trEven : trOdd }>
                <td>{ aluno.id }</td>
                <td>{ aluno.nome }</td>
                <td>{ aluno.nota }</td>
            </tr>
        )
    })

    return (
        <table style={ tableStyle }>
            <thead style={ thStyle }>
                <th>Id</th>
                <th>Nome</th>
                <th>Nota</th>
            </thead>
            <tbody>
                { alunosTB }
            </tbody>
        </table>
    )
}