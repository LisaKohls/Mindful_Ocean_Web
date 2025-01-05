import React from 'react';
import './QuoteLayout.css'
import { FaWater } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { PiFishSimpleBold } from "react-icons/pi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contentQuote_1, contentQuote_2, contentQuote_3, contentDetail_1, contentDetail_2, contentDetail_3, author, quote } from '../../resources/landigpageTextContent.tsx';
import {useFetchDataService} from "../../services/fetchDataService.tsx";

gsap.registerPlugin(ScrollTrigger);

const QuoteLayout: React.FC = () => {
    
   const quote = useFetchDataService('quote');
   

    if(!quote) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="wrapper">
            <div className="container-quote">
                <div className="quote">{quote.title}</div>
                <div className="author">{quote.content}</div>
            </div>
            <div className="container-details" >
                <div className="content">
                    <FaWater/>
                    <div className="content-bold">{contentQuote_1}</div>
                    <div className="content-details">{contentDetail_1}</div>
                </div>
                <div className="content">
                    <IoIosWater />
                    <div className="content-bold">{contentQuote_2}</div>
                    <div className="content-details">{contentDetail_2}</div>
                </div>
                <div className="content">
                    <PiFishSimpleBold />
                    <div className="content-bold">{contentQuote_3}</div>
                    <div className="content-details">{contentDetail_3}</div>
                </div>
            </div>
            
        </div>
    );
}

export default QuoteLayout;