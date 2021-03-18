import React from 'react'
import { Link } from 'react-router-dom'

export const Component1 = () => {
    return (
        <div>
            <h1>Componente 1</h1>
            <Link to="/path2">Ir a componente2</Link>
        </div>
    )
}
