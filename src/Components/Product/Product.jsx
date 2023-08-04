import "./Product.scss"
import {redirection} from "../../ZODApi/ZODApi";

export default function Product({title, price, currency, img, desc, target}) {
    return (
        <div className="hvr-hang item-container" onClick={
            target ? () => {
                redirection(target)
            } : null}>
            <img className="items-img" src={img} alt=""/>
            <span className="items-names">{title}</span>
            <span className="items-price">{price + " " + currency}</span>
            <span className="items-descriptions">{desc}</span>
        </div>
    )
}