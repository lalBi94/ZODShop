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
                    <Link className="link hvr-shrink" to="/ZODShop/" >
                        Home
                    </Link>

                    <Link className="link hvr-shrink" to="/ZODShop/shop">
                        Shop
                    </Link>

                    <img
                        src={logo}
                        alt="Logo officiel de ZODWorks"
                        onClick={
                            () => {
                                redirectionHREF("/ZODShop/")
                            }
                        }
                    />

                    <BurgerButton
                        text="Menu"
                        onclick={handleBurger}
                    />

                    <Link className="link hvr-shrink" to="/ZODShop/free">
                        Free
                    </Link>

                    <Link className="link hvr-shrink" onClick={
                        () => {
                            redirectionHREF("/ZODShop/#contact")
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

                    <Link to="/ZODShop/" onClick={handleBurger} className="hvr-shrink">
                        Home
                    </Link>

                    <Link to="/ZODShop/Shop" onClick={handleBurger} className="hvr-shrink">
                        Shop
                    </Link>

                    <Link to="/ZODShop/Free" onClick={handleBurger} className="hvr-shrink">
                        Free
                    </Link>

                    <a href="/ZODShop/#contact" onClick={handleBurger} className="hvr-shrink">
                        Contact
                    </a>
                </div>
            : null}
        </>
    )
}