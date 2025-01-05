import React, {useEffect, useRef, useState} from 'react';
import StartBtn from "./startBtn/startBtn";
import NavBar from "./navBar/navBar.tsx";
import QuoteLayout from "./quoteLayout/QuoteLayout.tsx";
import InformSection from "./informationSection/InformSection.tsx";
import ImageSection from "./quoteLayout/ImageSection.tsx";
import Introduction from "./introductionFunctions/Introduction.tsx";
import GlowingFont from "./TextAnimations/GlowingFont.tsx";
import Partners from "./quoteLayout/Partners.tsx";
import './TextAnimations/NormalText.css';
import CenteredImage from "./images/CenteredImage.tsx";
import plasticBottle from "../resources/content_images/plastic_bottle.png"

const MainLayout: React.FC = () => {
    const firstGridElementRef = useRef<HTMLDivElement | null>(null); 
/*
    const scrollToFirstGridElement = () => {
        firstGridElementRef.current?.scrollIntoView({ behavior: 'smooth' }); 
    };*/

    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) { 
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <NavBar visibility={`${showNav ? "visible" : "invisible"}`}/>
           
            <InformSection/>
           
            <ImageSection/>
         
            <QuoteLayout/>
           
            <Introduction/>
            
            <Partners/>
            
            <div className="normalText">Are You Ready?</div>
            <GlowingFont name='Start your journey now'/>
            <div className="flex items-center justify-center w-full ">
                <StartBtn title={'Start'}/>
            </div>
            <CenteredImage url={plasticBottle}/>
        </div>

    );
};

export default MainLayout;
