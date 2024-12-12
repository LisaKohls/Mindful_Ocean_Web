import React from 'react';
import './InformSection.css'
import {FaArrowRight, FaWater} from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { PiFishSimpleBold } from "react-icons/pi";
import { contentInform, titleInform } from '../../resources/landigpageTextContent.tsx';
import StartBtn from "../startBtn/startBtn.tsx";

const InformSection: React.FC = () => {
    return (
        <div className="container">
            <div className="container-inform">
                <div className="container-inform-author">Pollution</div>
                <div className="container-inform-title">{titleInform}</div>
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