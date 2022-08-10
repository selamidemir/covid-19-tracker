import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectRecovered, selectCountry, selectLastUpdate } from '../redux/covid19Slice';

function RecoveredCard() {
    const recovered = useSelector(selectRecovered);
    const lastUpdate = useSelector(selectLastUpdate);
    const country = useSelector(selectCountry);
    return (
        <Card className='recovered-card'>
            <Card.Body>
                <Card.Title>Recovered</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-700 fs-3">{recovered}</Card.Subtitle>
                <Card.Text>
                    <span className='d-inline-block mt-3'>Number of deaths caused by COVID-19</span>
                    <span className='d-inline-block mt-3'>Last Updated At { lastUpdate}</span>
                </Card.Text>
                <Card.Text className='fs-5'>{country.name}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default RecoveredCard;