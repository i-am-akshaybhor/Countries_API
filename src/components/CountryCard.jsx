import React from "react";
import { Link } from "react-router-dom";

function CountryCard({flag,name,population,region,capital,data}) {
  // console.log(name);
  // console.log(flag);
  return (
    <>
      <Link className="country-card" to={`/${name}`} state={data}>
        <div className="flag-container">
            <img src={flag} alt={name} />
        </div>
        <div className="card-content">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population:</b>{population}
          </p>
          <p>
            <b>Region:</b>{region}
          </p>
          <p>
            <b>Capital:</b>{capital}
          </p>
        </div>
      </Link>
    </>
  );
}

export default CountryCard;
