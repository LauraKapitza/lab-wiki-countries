//TODO: Filter names of border and display them instead of the border country code

import React from 'react';
import JSON from '../countries.json';
import { Link } from 'react-router-dom';
import './components.css'


const CountryDetails = (props) => {
    const foundCountry = JSON.filter(country => country.cca3 === props.match.params.id)
    console.log('found country', foundCountry)
    console.log('first item of found country', foundCountry[0])

    return (
        <div className="col-7">
            <h1>{foundCountry[0].name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{foundCountry[0].capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {foundCountry[0].area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul className='borderList'>
                    {foundCountry[0].borders.map(border => {
                        return (
                            <li key={border}><Link to={border}>{border}</Link></li>
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
