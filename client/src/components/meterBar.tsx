import React from 'react';
import {Location} from '../interfaces/location';

const MeterBar: React.FC<Location> = ({longitude, latitude}) => {
    return (
        <div className="fixed 
             right-0 
             top-0
             p-5">
            <svg width="2cm" height="2cm" viewBox="0 0 100 100" strokeWidth="5">
                <line x1="0" y1="0" x2="0" y2="80" stroke="white"/>
                <line x1="0" y1="80" x2="20" y2="80" stroke="white"/>
            </svg>
        </div>
    )
}

export default MeterBar;

