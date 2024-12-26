import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import './ScrollImages.css';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ScrollImages: React.FC = () => {

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        let tl = gsap.timeline({
            scrollTrigger: {
                pin: true,
                scrub: 1,
                trigger: container,
                end: "bottom bottom", // This ensures it scrolls until the end of the section
            },
            defaults: { ease: "none", duration: 1 },
        });

        tl.to(".parallax", { x: 300 })
            .to(
                ".panel",
                { x: () => -(container.scrollWidth - document.documentElement.clientWidth) },
                0
            )
            .from(
                ".secondAn",
                {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.2,
                    stagger: {
                        amount: 0.8,
                    },
                },
                0
            );

        gsap.from(".firstAn", {
            duration: 1,
            opacity: 0,
            scale: 0.5,
            scrollTrigger: {
                trigger: container,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse",
            },
        });

        // Cleanup ScrollTrigger instances on component unmount
        return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }, []);


    return(
        <div className="wrapper-scroll-images">
            <div className="spacer">
                <h1 className="heading-scroll-images">Scroll Down</h1>
            </div>

            <section className="section portfolio">
                <h2 className="portfolio_title text-stroke parallax">Portfolio</h2>
                <div className="panel">
                    <div className="panel_item">
                        <img className="panel_img firstAn" src="https://via.placeholder.com/800x600.jpg" alt="test1"/>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel_item">
                        <img className="panel_img firstAn" src="https://via.placeholder.com/800x600.jpg" alt="test2"/>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel_item">
                        <img className="panel_img secondAn" src="https://via.placeholder.com/800x600.jpg" alt="test3"/>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel_item">
                        <img className="panel_img secondAn" src="https://via.placeholder.com/800x600.jpg" alt="test4"/>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel_item">
                        <img className="panel_img secondAn" src="https://via.placeholder.com/800x600.jpg" alt="test5"/>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel_item">
                        <img className="panel_img secondAn" src="https://via.placeholder.com/800x600.jpg" alt="test6"/>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel_item">
                        <img className="panel_img secondAn" src="https://via.placeholder.com/800x600.jpg" alt="test7"/>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel_item">
                        <img className="panel_img secondAn" src="https://via.placeholder.com/800x600.jpg" alt="test8"/>
                    </div>
                </div>
            </section>

            <div className="spacer">
                <h1 className="heading-scroll-images">The End</h1>
            </div>
        </div>
    )
}

export default ScrollImages;
   