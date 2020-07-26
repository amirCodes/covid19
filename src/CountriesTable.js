import React from 'react'
import './style.css'
function CountriesTable({ countries }) {
    return (
        <div className="countries-table">
            {
                countries.map(({ country, cases }) => (
                    <tr>
                        <td>{country}</td>
                        <td>
                            <strong>{cases}</strong>
                        </td>
                    </tr>
                ))
            }
        </div>
    )
}

export default CountriesTable
