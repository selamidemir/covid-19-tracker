import React from 'react';
import CardBox from './CardBox';
import CovidGraph from './CovidGraph';
import SelectCountry from './SelectCountry';
import { selectError } from '../redux/covid19Slice';
import { useSelector } from 'react-redux';

function Content() {
  const error = useSelector(selectError);

  if(error) return <div className='w-100 text-center text-danger'>Error: { error }</div>;

  return (
    <div className='content'>
        <SelectCountry />
        <CardBox />
        <CovidGraph />
    </div>
  )
}

export default Content;