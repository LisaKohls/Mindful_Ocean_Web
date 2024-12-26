import React from 'react';
import './InformSection.css'
import { contentInform, titleInform } from '../../resources/landigpageTextContent.tsx';
import StartBtn from "../startBtn/startBtn.tsx";
import {fetchContentBySection} from "../../api/FetchLandingPageApi.tsx";

const InformSection: React.FC = () => {
    let data = fetchContentBySection('informationSection');
        
    return (
        <div className="container">
            <div className="container-inform">
                <div className="container-inform-author">Pollution</div>
                <div className="container-inform-title">{}</div>
            </div>
            <div className="container-detailscontent">
                <div className="container-details-content">{contentInform}</div>
                <div className="">
                    <StartBtn title="Learn more"/>
                    <a className="container-details-link">Interactive journey {'>'} </a>
                </div>
            </div>
        </div>
    );
}

export default InformSection;