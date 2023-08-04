import "./CustomButton.scss"
import {useState, useCallback} from "react";
import {redirection, redirectionHREF} from "../../ZODApi/ZODApi"

export default function CustomButton({ text, target, onclick, hover }) {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true)
    }, [])

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false)
    }, [])

    return (
        <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onclick ? onclick : () => { target.isHref ? redirectionHREF(target.url) : redirection(target.url) }}
            className="custom-btn"
            style={ isHovered ?
                hover
            : null }>
            {text}
        </button>
    )
}