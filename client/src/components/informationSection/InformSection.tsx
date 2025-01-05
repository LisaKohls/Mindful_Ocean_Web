import React, {useEffect, useState} from 'react';
import './InformSection.css'
import { contentInform, titleInform } from '../../resources/landigpageTextContent.tsx';
import StartBtn from "../startBtn/startBtn.tsx";
import {fetchContentBySection} from "../../api/FetchLandingPageApi.tsx";
import {useFetchDataService} from "../../services/fetchDataService.tsx";

const InformSection: React.FC = () => {
    
    const data = useFetchDataService('informationSection');
    
    if(!data) {
        return <div>Loading...</div>;
    }        
    
    return (
        <div className="container">
            <div className="container-inform">
                <div className="container-inform-author">Pollution</div>
                <div className="container-inform-title">{data.title}</div>
            </div>
            <div className="container-detailscontent">
                <div className="container-details-content">{data.content}</div>
                <div className="">
                    <StartBtn title="Learn more"/>
                    <a className="container-details-link">Interactive journey {'>'} </a>
                </div>
            </div>
        </div>
    );
}

export default InformSection;