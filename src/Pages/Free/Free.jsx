import "./Free.scss"
import Config from "./assets/Free.json"
import Product from "../../Components/Product/Product";
import {useEffect, useState} from "react";

export default function Free() {
    const [items, setItems] = useState([])

    useEffect(() => {
        let newItems = []
        setItems([])

        for(let e in Config) {
            newItems.push(Config[e])
            console.log(Config[e])
        }

        setItems(newItems)
    }, [setItems])

    return (
        <>
            { items.length > 0 ?
                <div id="items-container">
                    { items.map((item, index) => (
                        <Product
                            title={item.name}
                            img={item.img}
                            price={item.price}
                            currency={item.currency}
                            desc={item.description}
                            target={item.target}
                        />
                    ))}
                </div>
            :
            <div style={{fontFamily: "Comics", fontSize: "7rem", color: "red", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    Nothing free for the moment !
            </div>}
        </>
    )
}