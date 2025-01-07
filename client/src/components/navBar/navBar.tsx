import { FaBars } from "react-icons/fa"
import React, {useEffect, useRef} from "react"
import './navBar.css';
import whiteLogo from '../../resources/logo/white_logo.png'

interface VisibilityProps{
    visibility: string;
}
const NavBar: React.FC<VisibilityProps> = ({visibility}) => {
    const navRef = useRef<HTMLElement>(null);
    const showNavbar = () => {
        if (navRef && navRef.current) {
            navRef.current.classList.toggle("responsive_nav");
        }
    }

    const closeNavbar = () => {
        if (navRef && navRef.current) {
            navRef.current.classList.remove("responsive_nav");
        }
    };

    useEffect(() => {
        const navLinks = document.querySelectorAll('header nav a');

        navLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                if(link?.getAttribute('href')?.startsWith('#')){
                    event.preventDefault();
                    const href = link.getAttribute('href'); 
                    if (href) {
                        const target = document.querySelector(href); 
                        target?.scrollIntoView({
                            behavior: 'smooth',
                        });
                    }
                    closeNavbar();
                }
            });
        });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (navRef && navRef.current && window.innerWidth > 1024) {
                navRef.current.classList.remove("responsive_nav");
            }
            if (navRef && navRef.current && window.innerWidth < 1024) {
                navRef.current.classList.remove("invisible");
            }
        };

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    
    return (
        <header className={visibility}>
            <a href="..">
                <img src={whiteLogo} alt="Mindful Logo" width="75px" height="75px"/>
            </a>
            <nav ref={navRef}>
                <a href="/main">Main</a>
                <a href="/about">About</a>
                <a href="/donations">Donations</a>
                <a href="/donations">Newsletter</a>
                <a href="/contact">Contact</a>
                <button className={"nav-btn nav-close-btn"} onClick={showNavbar}>
                    ✕
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
};

export default NavBar;