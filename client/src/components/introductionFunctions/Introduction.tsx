import React from 'react';
import './Introduction.css'
import unreal_ui from "../../resources/content_images/prewiew_ui.png";
const Introduction: React.FC = () => {
    return (
        <div className="wrapper-intro">
            <div className="container-intro">
                <div className="container-intro-title">Discover the functions of MINDFUL OCEAN</div>
                <div className="container-intro-description">Try out the main features of the interactive map of Mindful Ocean to see how Marine Life is affected by pollution.
                </div>
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