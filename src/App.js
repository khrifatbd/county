import React,{useState, useEffect} from 'react';
import './App.css';
import Countries from './com/Countries';
import Country from './com/Country';
import Search from './com/Search';

const url = "https://restcountries.com/v3.1/all";





function App() {

  const[isLoading, setIsLoading] = useState(true);
  const[error, setError] = useState(null)
  const[countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries)

  const fetchData = async(url) => {
    setIsLoading(true);

    try{
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    }catch(error){
      isLoading(false);
      setError(error);
    }

  }

  useEffect(() => {
    fetchData(url)
  },[])

  const handleRemoveCountry = (name) =>{
    alert("are you sure delete "+ name+"????");
    const filter = filteredCountries.filter((Country) => Country.name.common !== name);
    setFilteredCountries(filter);
  }

  const handleSearch =(serchValue) =>{
    let value = serchValue.toLowerCase();
    const newCountries = countries.filter((Country) => {
      const countryName = Country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  }
  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch}/>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry} />}
    </>
  );
}

export default App;
