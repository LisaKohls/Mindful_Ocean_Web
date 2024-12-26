import React from 'react';
import './landingpage.css';
import gsap from 'gsap';
import LandingpageImage from '../resources/LandingpageImage.png'

const LandingPage: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <section className="section hero"></section>
                <section className="section gradient-purple"></section>
                <section className="section gradient-blue"></section>
            </div>
            <div className="image-container">
                <img
                    src={LandingpageImage}
                    alt="image"/>
            </div>
    </div>
    )
}

console.clear();

gsap.registerPlugin(ScrollTrigger);


window.addEventListener("load", () => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: true,
            }
        })
        .to("img", {
            scale: 2,
            z: 350,
            transformOrigin: "center center",
            ease: "power1.inOut"
        })
        .to(
            ".section.hero",
            {
                scale: 1.1,
                transformOrigin: "center center",
                ease: "power1.inOut"
            },
            "<"
        );
});

export default LandingPage;