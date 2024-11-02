import React, {useRef} from 'react';
import Arrow from "./arrow";
import InteractiveTitle from "./interactiveTitle";
import InformUserSection from "./informUserSection";
import CircularBtn from "./circularBtn";
import StartBtn from "./startBtn/startBtn";

const MainLayout: React.FC = () => {
    const firstGridElementRef = useRef<HTMLDivElement | null>(null); 

    const scrollToFirstGridElement = () => {
        firstGridElementRef.current?.scrollIntoView({ behavior: 'smooth' }); 
    };

    return (
        <div>
            { /*<div className="flex flex-col items-center justify-center mb-10">
                
                    <MeterBar longitude={1} latitude={1}/>
                    <Globe longitude={1} latitude={1}/>
                    
                <Arrow onClick={scrollToFirstGridElement}/>
            </div>*/}
            <InformUserSection
                text_one={'1'}
                text_two={'2'}
                text_three={'3'}
                text_four={'4'}
                firstGridElementRef={firstGridElementRef}
            />
            {/*<div className="flex justify-center mt-8 box-border">*/}
            <div className="flex items-center justify-center w-full h-[350px]">
                {/*<CircularBtn title={'Start'}/>*/}
                <StartBtn />
            </div>
        </div>

    );
};

export default MainLayout;
