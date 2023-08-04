import { Footer } from 'flowbite-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png"
import "./FooterW.scss"
import {redirection} from "../../ZODApi/ZODApi"

export default function FooterW() {

    return (
        <Footer container style={{background: "#333533", color: "white"}}>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className="mt-4 sm:justify-center">
                        <Footer.Brand
                            alt="ZODWorks Logo"
                            href="#root"
                            name="ZODWorks"
                            src={logo}
                        />
                    </div>

                    <div className="mt-4 flex space-x-6 sm:justify-center">
                        <FontAwesomeIcon
                            className="hvr-shrink"
                            icon={faDiscord}
                            style={{
                                filter: "invert(100%)",
                                fontSize: "2rem",
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                redirection("https://discord.gg/xpCc6XmUaX")
                            }}
                        />

                        <FontAwesomeIcon
                            className="hvr-shrink"
                            icon={faGithub}
                            style={{
                                filter: "invert(100%)",
                                fontSize: "2.1rem",
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                redirection("https://github.com/lalBi94")
                            }}
                        />
                    </div>
                </div>
                <Footer.Divider style={{borderColor: "white"}} />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        by="Krypton Project"
                        href="#root"
                        year={2023}
                    />
                </div>
            </div>
        </Footer>
    )
}