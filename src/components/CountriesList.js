import React from 'react';
import JSON from '../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => {
    return (
        <div className="container">
            {JSON.map((country) => {
                return (
                    <div className="row" key={country.ccn3}>
                        <div className="col-5" style="max-height: 90vh; overflow: scroll">
                            <div className="list-group">
                                <Link className="list-group-item list-group-item-action" to={`/${country.cca3}`}>
                                    🇦{country.flag} {country.name}
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
