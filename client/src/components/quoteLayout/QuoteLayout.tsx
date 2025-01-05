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
   const quoteDetail1 = useFetchDataService('quoteDetail1');
   const quoteDetail2 = useFetchDataService('quoteDetail2');
   const quoteDetail3 = useFetchDataService('quoteDetail3');

    if(!quote) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="wrapper">
            <div className="container-quote">
                <div className="quote">{quote?.title}</div>
                <div className="author">{quote?.content}</div>
            </div>
            <div className="container-details" >
                <div className="content">
                    <FaWater/>
                    <div className="content-bold">{quoteDetail1?.title}</div>
                    <div className="content-details">{quoteDetail1?.content}</div>
                </div>
                <div className="content">
                    <IoIosWater />
                    <div className="content-bold">{quoteDetail2?.title}</div>
                    <div className="content-details">{quoteDetail2?.content}</div>
                </div>
                <div className="content">
                    <PiFishSimpleBold />
                    <div className="content-bold">{quoteDetail3?.title}</div>
                    <div className="content-details">{quoteDetail3?.content}</div>
                </div>
            </div>
            
        </div>
    );
}

export default QuoteLayout;