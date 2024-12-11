import React from 'react';
import '../quoteLayout/QuoteLayout.css'
import coral_reefs from '../../resources/content_images/coral_reefs.jpg'
import map from '../../resources/content_images/antarctica.jpg'
import plastic from '../../resources/content_images/plastic_in_ocean.jpg'

const ImageSection: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="container-quote">
                <div className="quote">Explore the Wonders of Marine Life and Protect Our Oceans</div>
            </div>
            <div className="container-details">
                <div className="content-container">
                    <div className="content-container-image">
                    <img
                        src={coral_reefs}
                        alt="Explore Coral Reefs"
                        className="content-image"
                    />
                    </div>
                    <div className="content-bold">Explore Coral Reefs</div>
                    <div className="content-details">Explore Coral Reefs through the eye of a turtle.</div>
                </div>
                <div className="content-container">
                    <div className="content-container-image">
                        <img
                            src={map}
                            alt="Explore Coral Reefs"
                            className="content-image"
                        />
                    </div>
                        <div className="content-bold">Interactive Map</div>
                        <div className="content-details">Explore the areas of the globe and learn facts about the
                            Ocean.
                        </div>
                    </div>
                <div className="content-container">
                    <div className="content-container-image">
                        <img
                            src={plastic}
                            alt="Explore Coral Reefs"
                            className="content-image"
                        />
                    </div>
                        <div className="content-bold">Effects of Pollution on Sealife</div>
                        <div className="content-details">Interactive Experience of the realtime Effects of Pollution.
                        </div>
                    </div>
                </div>

            </div>
            );
            }

            export default ImageSection;