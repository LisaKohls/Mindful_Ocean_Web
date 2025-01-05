import React from "react";
import './GlowingFont.css';

interface Props {
    name: string;
}
const GlowingFont: React.FC<Props> = ({name}) => {
    return (
        <div className="neon-container">
            <h1 className="neon-text">{name}</h1>
        </div>
    )
}

export default GlowingFont;
