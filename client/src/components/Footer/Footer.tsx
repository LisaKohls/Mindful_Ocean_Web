import React from "react";
import "./Footer.css"
import {SocialIcon} from 'react-social-icons';


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footerInformation">
                <div className="footerElement">
                    <p className="footer-heading">Members:</p>
                    <div className="footerInhalt">
                        <p>Janniella Heimig, </p>
                        <p>Maria Guerreiro,</p>
                        <p>Lisa Kohls</p>
                    </div>
                </div>
                <div className="footerElement">
                    <p className="footer-heading">Info:</p>
                    <div className="footerInhalt">
                        <p>Mindful Ocean is a </p>
                        <p>project founded by Turtelly Amazing</p>
                    </div>
                </div>
                <div className="footerElement">
                    <p className="footer-heading">Address:</p>
                    <div className="footerInhalt">
                        <p>Av. Dom Carlos I 4 //</p>
                        <p>1200-649 Lisboa</p>
                    </div>
                </div>
                <div className="footerElement">
                    <p className="footer-heading">Contact:</p>
                    <div className="footerInhalt">
                        <a href="#" target="_blank">team@mindful_ocean.com</a>
                    </div>
                </div>
            </div>

            <div className="line"></div>

            <div className="bottom">
                <div className="copyright">
                    <p> © {currentYear} Mindful Ocean - Turtlelly Amazing</p>
                </div>
                <div className="socialIconsBottom">
                    <SocialIcon
                        bgColor="black"
                        url="https://www.facebook.com/"
                        target="_blank"
                        style={{margin: "0.5rem"}}
                    />
                    <SocialIcon
                        bgColor="black"
                        url="https://www.instagram.com/plasticoceans/"
                        target="_blank"
                        style={{margin: "0.5rem"}}
                    />
                    <SocialIcon
                        bgColor="black"
                        url="mailto:team@mindful_ocean.com"
                        target="_blank"
                        style={{margin: "0.5rem"}}
                    />
                </div>
                <div className="impressum">
                    <a href="/impressum">Impressum /</a>
                    <a href="/privacy">/ Privacy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;