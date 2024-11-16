import React, {useEffect, useRef, useState} from 'react';
import Arrow from "./arrow";
import InteractiveTitle from "./interactiveTitle";
import InformUserSection from "./informUserSection";
import CircularBtn from "./circularBtn";
import StartBtn from "./startBtn/startBtn";
import NavBar from "./navBar/navBar.tsx";

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
            <NavBar visibility={`${showNav ? "visible" : "invisible"}`} />
            { /*<div className="flex flex-col items-center justify-center mb-10">
                
                    <MeterBar longitude={1} latitude={1}/>
                    <Globe longitude={1} latitude={1}/>
                    
                <Arrow onClick={scrollToFirstGridElement}/>
            </div>*/}
            <InformUserSection
                firstGridElementRef={firstGridElementRef}
            />
            {/*<div className="flex justify-center mt-8 box-border">*/}
            <div className="flex items-center justify-center w-full h-[350px]">
                {/*<CircularBtn title={'Start'}/>*/}
                <StartBtn title={'Start'}/>
            </div>
        </div>

    );
};

export default MainLayout;
