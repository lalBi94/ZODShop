import "./BurgerButton.scss"

export default function BurgerButton({text, symbol, onclick, persostyle}) {
    return (
        <button className="burger-btn" onClick={onclick} style={persostyle ?? null}>
            <span className="text">
                {text}
            </span>
        </button>
    )
}