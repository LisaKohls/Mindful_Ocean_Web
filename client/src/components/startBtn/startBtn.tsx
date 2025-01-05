import React from 'react';
import './startBtn.css';
import {fetchOilSpillsApi} from "../../api/FetchOilSpillsApi.tsx";
import OilSpillSetting from "../../interfaces/OilSpillSetting.tsx";

interface btnProps {
    title: string;
}

const StartBtn: React.FC<btnProps> = ({title}) => {
    
    const oilSpillSettings: OilSpillSetting = {
        year: 2019,
        limit: 10,
        searchParam: "brisbane"
    };
    
    return (
        <button className="pulse" onClick={() => testOilSpillsApi(oilSpillSettings)}><span>{title}</span></button>
    )
}

function testOilSpillsApi(oilSpillSettings: OilSpillSetting) {
    console.log('button clicked')
    console.log(fetchOilSpillsApi(oilSpillSettings));
}

export default StartBtn;