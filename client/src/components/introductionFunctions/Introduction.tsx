import React from 'react';
import './Introduction.css'
import unreal_ui from "../../resources/content_images/prewiew_ui.png";
import {useFetchDataService} from "../../services/fetchDataService.tsx";
const Introduction: React.FC = () => {
    const data = useFetchDataService('introduction')
    return (
        <div className="wrapper-intro">
            <div className="container-intro">
                <div className="container-intro-title">{data?.title}</div>
                <div className="container-intro-description">{data?.content}</div>
            </div>
            <a className="container-intro-image">
                <img
                    src={unreal_ui}
                    alt="Explore Coral Reefs"
                    className="intro-image"
                />
            </a>
        </div>
    );
}

export default Introduction;