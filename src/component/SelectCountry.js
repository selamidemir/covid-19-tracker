import React from 'react';
import countries from '../assets/countries.json';

function SelectCountry() {
  console.log(countries)
  return (
    <div className='country-select w-100'>
      <select>
        {
          countries.countries.map((country, key) => <option key={key} value={country.iso2}>{country.name}</option>)
        }
      </select>
    </div>
  )
}

export default SelectCountry;