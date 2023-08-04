import NavBar from "../Components/NavBar/NavBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import FooterW from "../Components/FooterW/FooterW";
import {redirectionHREF} from "../ZODApi/ZODApi"

export default function Layout({children}) {
    return (
        <>
            <NavBar />

            <main>
                {children}
            </main>

            <FooterW />

            <FontAwesomeIcon
                onClick={() => {
                    redirectionHREF("#root")
                }}
                className="hvr-float hvr-pulse-shrink"
                icon={faArrowUp}
                style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    fontSize: "1.5rem",
                    padding: "10px",
                    background: "#fff",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    cursor: "pointer"
                }}
            />
        </>
    )
}