import React from "react";
import {GiThreeLeaves, GiTurtle} from "react-icons/gi";
import {LuRecycle} from "react-icons/lu";

const Partners: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="container-quote">
                <div className="quote">Our Partners</div>
            </div>
        <div className="container-details">
            <div className="content">
                <GiTurtle />
                <div className="content-bold">SeaChange Collective</div>
            </div>
            <div className="content">
                <LuRecycle />
                <div className="content-bold">Zero Waste Europe</div>
            </div>
            <div className="content">
                <GiThreeLeaves />
                <div className="content-bold">World Wildlife Fund</div>
            </div>
        </div>
        </div>
        )
}

export default Partners;