import React from 'react';
import './startBtn.css';
import {fetchOilSpillsApi} from "../../api/FetchOilSpillsApi.tsx";
import OilSpillSetting from "../../interfaces/OilSpillSetting.tsx";

interface btnProps {
    title: string;
}

const StartBtn: React.FC<btnProps> = ({title}) => {
    
    return (
        <button className="pulse"><span>{title}</span></button>
    )
}

export default StartBtn;