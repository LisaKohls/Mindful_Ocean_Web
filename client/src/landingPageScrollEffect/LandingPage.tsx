import React from 'react';
import './landingpage.css';
import gsap from 'gsap';

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
                src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
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
                markers: true
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