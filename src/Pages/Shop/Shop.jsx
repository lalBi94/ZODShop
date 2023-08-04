import "./Shop.scss"
import {useEffect, useState, useCallback} from "react"
import Config from "./assets/Shop.json"
import CustomButton from "../../Components/CustomButton/CustomButton";
import {changeTitle} from "../../ZODApi/ZODApi";
import Product from "../../Components/Product/Product"

export default function Shop({category}) {
    const [showedItems, setShowedItems] = useState([])

    /**
     * Modify the current showed items.
     * @param { "SRV", "PBZW", "ZW" } category Category id
     * @return {void}
     * */
    const setNewShowedItems = useCallback((category) => {
        let newShowedItems = []
        setShowedItems([])

        for(let e in Config) {
            if(Config[e].category === category) {
                newShowedItems.push(Config[e])
            } else {}
        }

        setShowedItems(newShowedItems)
    }, [])

    useEffect(() => {
        changeTitle("Shop")

        const searchParams = new URLSearchParams(window.location.search)
        const cat = searchParams.get('category')

        switch(cat) {
            case "SRV": {
                setNewShowedItems("SRV")
                break
            }

            case "PBZW": {
                setNewShowedItems("PBZW")
                break
            }

            case "ZW": {
                setNewShowedItems("ZW")
                break
            }

            default: {
                setNewShowedItems("ZW")
                break
            }
        }
    }, [category, setNewShowedItems])

    return (
        <>
            <div id="items-controler">
                <CustomButton text="ZODWorks" onclick={
                    () => {
                        setNewShowedItems("ZW")
                    }} />

                <CustomButton text="Powered by ZODWorks" onclick={
                    () => {
                        setNewShowedItems("PBZW")
                    }} />

                <CustomButton text="Services" onclick={
                    () => {
                        setNewShowedItems("SRV")
                    }}
                />
            </div>

            <div id="items-container">
                { showedItems.length > 0 ?
                    showedItems.map((item, index) => (
                        <Product
                            title={item.name}
                            img={item.img}
                            price={item.price}
                            currency={item.currency}
                            desc={item.description}
                            key={index}
                            target={item.target}
                        />
                    )) : null
                }
            </div>
        </>
    )
}