import React from 'react';
import {v4 as uuidv4 } from "uuid";
import Country from './Country';

const Countries = (props) => {
  return (
    <div style={{padding: "3rem", display: "grid", gap: "2rem", display:"flex",overflow:'hidden', flexDirection: 'row',justifyContent: 'space-around',alignItems: 'flex-start', flexWrap: 'wrap'}}>
      {props.countries.map((country) => {
            const countryNew = {country, id: uuidv4() }
            return <Country {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry}/>
        })}
    </div>
  )
}

export default Countries