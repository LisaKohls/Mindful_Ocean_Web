import React from 'react';
import './startBtn.css';

interface CircularBtnProps {
    title: string;
}
const StartBtn: React.FC<CircularBtnProps> = ({title}) => {
    return (
        <button className="pulse"><span>{title}</span></button>
    )
}

export default StartBtn;