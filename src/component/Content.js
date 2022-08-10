import React from 'react';
import CardBox from './CardBox';
import CovidGraph from './CovidGraph';
import SelectCountry from './SelectCountry';

function Content() {
  return (
    <div className='content'>
        <SelectCountry />
        <CardBox />
        <CovidGraph />
    </div>
  )
}

export default Content;