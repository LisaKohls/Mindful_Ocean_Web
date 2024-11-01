import React from 'react';

interface ArrowProps {
    onClick: () => void;
}

const Arrow: React.FC<ArrowProps> = ({onClick}) => {
    return (
        <div className='flex justify-center min-h-screen' onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7"
                 stroke="currentColor"
                 className="w-12 h-12"
                cursor='pointer'>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
        </div>
    )
}

export default Arrow;