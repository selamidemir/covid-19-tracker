import React from 'react';
import ActiveCard from './ActiveCard';
import DeathsCard from './DeathsCard';
import InfectedCard from './InfectedCard';
import RecoveredCard from './RecoveredCard';

function CardBox() {
    return (
        <div className='card-box d-md-flex justify-content-between'>
            <InfectedCard />
            <RecoveredCard />
            <DeathsCard />
            <ActiveCard />
        </div>
    )
}

export default CardBox;