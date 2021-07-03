//TODO: Filter names of border and display them instead of the border country code

import React from 'react';
import JSON from '../countries.json';
import { Link } from 'react-router-dom';
import './components.css'


const CountryDetails = (props) => {
    const getCountry = JSON.filter(country => country.cca3 === props.match.params.id) //'Andorra'
    let foundCountry = getCountry[0] //.filter() creates an array, thus we need the first an donly item

    //if borders we need their properties
    if(foundCountry.borders) {
        foundCountry.borders.forEach((border, index) => {
            const getBorderCountry = JSON.filter(country => country.cca3 === border)
            foundCountry.borders.splice(index, 1, getBorderCountry[0])
        })
    }

    return (
        <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{foundCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {foundCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul className='borderList'>
                    {foundCountry.borders.map(border => {
                        return (
                            <li key={border.cca3}><Link to={border.cca3}>{border.name.common}</Link></li>
                        )
                    })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

export default CountryDetails;
