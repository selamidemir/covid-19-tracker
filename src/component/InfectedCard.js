import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectInfected, selectCountry, selectLastUpdate } from '../redux/covid19Slice';

function InfectedCard() {
    const infected = useSelector(selectInfected);
    const lastUpdate = useSelector(selectLastUpdate);
    const country = useSelector(selectCountry);
    return (
        <Card className='infected-card'>
            <Card.Body>
            <Card.Title>Infected</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-700 fs-3">{infected}</Card.Subtitle>
                <Card.Text>
                    <span className='d-inline-block mt-3'>Number of deaths caused by COVID-19</span>
                    <span className='d-inline-block mt-3'>Last Updated At { lastUpdate}</span>
                </Card.Text>
                <Card.Text className='fs-5'>{country.name}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default InfectedCard;