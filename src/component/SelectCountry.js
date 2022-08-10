import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import countries from '../assets/countries.json';
import { changeCountry } from '../redux/covid19Slice';

function SelectCountry() {
  const dispatch = useDispatch();

  const handleCountry = (e) => {
    e.preventDefault();
    const selectedCountry = countries.countries.find(c => c.iso2 === e.target.value);

    dispatch(changeCountry(selectedCountry))
  }

  return (
    <div className='country-select w-100'>
      <select onChange={(e) => handleCountry(e)}>
        {
          countries.countries.map((country, key) => <option key={key} value={country.iso2}>{country.name}</option>)
        }
      </select>
    </div>
  )
}

export default SelectCountry;