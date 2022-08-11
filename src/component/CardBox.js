import React from 'react';
import { useSelector } from 'react-redux';
import ActiveCard from './ActiveCard';
import DeathsCard from './DeathsCard';
import InfectedCard from './InfectedCard';
import RecoveredCard from './RecoveredCard';
import { selectIsLoading } from '../redux/covid19Slice';

function CardBox() {
    const isLoading = useSelector(selectIsLoading);

    return (
        <div className='card-box d-md-flex justify-content-between'>
            <>
                {isLoading && <div className='text-center text-info w-100'>Loading...</div>}
                {
                    !isLoading && 
                    <>
                        <InfectedCard />
                        <RecoveredCard />
                        <DeathsCard />
                        <ActiveCard />
                    </>
                }
            </>
        </div>
    )
}

export default CardBox;