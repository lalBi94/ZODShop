import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import "../Home/Home.scss"
import CustomButton from "../../Components/CustomButton/CustomButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiscord, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import kryptonproject from "../../assets/kryptonproject.png"
import scripts from "./assets/scripts.jpg"
import bilou from "./assets/bilou.gif"
import backgroundcontact from "./assets/backgroundcontact.gif"
import {useEffect, useState} from "react";
import {redirection, redirectionHREF, changeTitle} from "../../ZODApi/ZODApi"
import bg3 from "./assets/bg3.jpg"
import bg2 from "./assets/bg2.jpg"
import bg1 from "./assets/bg1.jpg"

export default function Home() {
    const [social, _] = useState({
        discord: "https://discord.gg/xpCc6XmUaX",
        github: "https://github.com/lalBi94",
        linkedin: "https://www.linkedin.com/in/bilal-boudjemline-54365b228/"
    })

    const [items, __] = useState([
        <div className="item" style={{background: `url(${bg1})`}}>
            <div className="item-content">
            <span>
                Welcome to <br/>
                Krypton Project
            </span>

                <img src={kryptonproject} alt="fsefse" width={80} height={80} style={{borderRadius: "50%"}}/>
            </div>

            <div id="item-btn-grup">
                <CustomButton
                    target={{isHref: false, url: "https://discord.gg/xpCc6XmUaX"}}
                    hover={{background: "#7289d9", color: "white"}}
                    text={
                        <>
                            <FontAwesomeIcon icon={faDiscord} />
                            &nbsp;Join
                        </>
                    }
                />

                <CustomButton
                    target={{isHref: true, url: "/shop?category=ZW"} }
                    text="Discover"
                />
            </div>
        </div>,

        <div className="item" style={{background: `url(${bg2})`}}>
            <div className="item-content">
            <span>
                Discover <br/>
                Innovative Scripts !
            </span>

                <img src={scripts} alt="fsefse" width={80} height={80} style={{borderRadius: "50%"}}/>
            </div>

            <div id="item-btn-grup">
                <CustomButton
                    target={{isHref: true, url: "/shop?category=PBZW"} }
                    text="Discover"
                />
            </div>
        </div>,

        <div className="item" style={{background: `url(${bg3})`}}>
            <div className="item-content">
            <span>
                Here you will <br/>
                find the services I offer
            </span>

                <img src={kryptonproject} alt="fsefse" width={80} height={80} style={{borderRadius: "50%"}}/>
            </div>

            <div id="item-btn-grup">
                <CustomButton
                    target={{isHref: true, url: "/shop?category=SRV"} }
                    text="Discover"
                />
            </div>
        </div>,
    ])

    useEffect(() => {
        changeTitle("Home")
    }, [])

    return (
        <>
            <div id="slider">
                <h2 id="slider-title">My Works</h2>

                <AliceCarousel
                    mouseTracking
                    items={items}
                    autoPlayInterval={5000}
                    autoPlayDirection="ltr"
                    autoPlay={true}
                    disableAutoPlayOnAction={true}
                    renderPrevButton={() => null}
                    renderNextButton={() => null}
                />
            </div>

            <div id="contact">
                <h2 id="contact-title">Contact me</h2>

                <div id="contact-body">
                    <img id="contact-background" src={backgroundcontact} alt=""/>
                    <img id="contact-pp" src={bilou} alt=""/>

                    <span id="contact-name">General Zod</span>
                    <span id="contact-desc">Full-Stack & Five M developer</span>

                    <span id="contact-desc">
                        <br/>3rd-year Computer Science student specializing in Full Stack Development.
                        I offer script sales for Five M, provide web development services, and teach
                        Full Stack Development as a private tutor.
                    </span>

                    <div id="contact-social">
                        <div className="socials">
                            <FontAwesomeIcon className="hvr-shrink discord " icon={faDiscord} onClick={() => { redirection(social.discord) }}/>
                            <FontAwesomeIcon className="hvr-shrink github" icon={faGithub} onClick={() => { redirection(social.github) }}/>
                            <FontAwesomeIcon className="hvr-shrink linkedin" icon={faLinkedin} onClick={() => { redirection(social.linkedin) }}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}