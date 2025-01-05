import React from "react";
import "./Image.css"

interface Props {
    url: string;
}

const CenteredImage: React.FC<Props> = ({url}) => {
    return (
        <div className='centered-image-container'>
            <img
                src={url}
                alt='plasticbottle'
                className='centered-image'
            />
        </div>
    )
}

export default CenteredImage;