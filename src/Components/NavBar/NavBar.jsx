import logo from "../../assets/logo.png"
import {Link} from "react-router-dom"
import "./NavBar.scss"
import {useCallback, useState} from "react"
import BurgerButton from "../BurgerButton/BurgerButton";
import {redirectionHREF} from "../../ZODApi/ZODApi"
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function NavBar() {
    const [isBurger, setIsBurger] = useState(false)

    /**
     * Activate burger menu
     * @return {void}
     * */
    const handleBurger = useCallback(() => {
        setIsBurger(!isBurger)
    }, [isBurger])

    return (
        <>
            <nav>
                <ul>
                    <Link className="link hvr-shrink" to="/" >
                        Home
                    </Link>

                    <Link className="link hvr-shrink" to="/shop">
                        Shop
                    </Link>

                    <img
                        src={logo}
                        alt="Logo officiel de ZODWorks"
                        onClick={
                            () => {
                                redirectionHREF("/")
                            }
                        }
                    />

                    <BurgerButton
                        text="Menu"
                        onclick={handleBurger}
                    />

                    <Link className="link hvr-shrink" to="/free">
                        Free
                    </Link>

                    <Link className="link hvr-shrink" onClick={
                        () => {
                            redirectionHREF("/#contact")
                        }
                    }>
                        Contact
                    </Link>
                </ul>
            </nav>

            { isBurger ?
                <div id="burger-menu-container">
                    <div id="close" onClick={ handleBurger }>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>

                    <Link to="/" onClick={handleBurger} className="hvr-shrink">
                        Home
                    </Link>

                    <Link to="/Shop" onClick={handleBurger} className="hvr-shrink">
                        Shop
                    </Link>

                    <Link to="/Free" onClick={handleBurger} className="hvr-shrink">
                        Free
                    </Link>

                    <a href="/#contact" onClick={handleBurger} className="hvr-shrink">
                        Contact
                    </a>
                </div>
            : null}
        </>
    )
}