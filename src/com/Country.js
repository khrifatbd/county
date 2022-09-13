import React from 'react'




const Country = (props) => {
    const{name, flags, capital, population, area}= props.country;

 const handleRemoveCounty =(name) =>{
props.onRemoveCountry(name);
 }   
  return (
<article>
        <img src={flags.png} alt={name.common}/>
        <h3>Name: {name.common}</h3>
        <h3>Popultaion: {population}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
        <button style={{border:"none", borderRedius: '2px', background:"green", color:'white', padding:"10px"}} onClick={()=>{
          handleRemoveCounty(name.common)
        }}>
          Remove Country
        </button>
    </article>
  )
}

export default Country