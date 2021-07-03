import React from 'react';
import JSON from '../countries.json';
import { Link } from 'react-router-dom';
import './components.css'

const CountriesList = () => {
    const cssStyle = {
        maxHeight: '90vh',
        overflow: window.scroll
    }
    return (
        <div className="container">
            {JSON.map((country) => {
                return (
                    <div className="row countryList" key={country.ccn3}>
                        <div className="col-5" style={{cssStyle}}>
                            <div className="list-group">
                                <Link className="list-group-item list-group-item-action" to={`/${country.cca3}`}>
                                    <span>{country.flag} </span>
                                    <span>{country.name.common}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList;
