import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from "../../Pages/Home/Home"
import Layout from "../../Layout/Layout"
import Shop from "../../Pages/Shop/Shop"
import Free from "../../Pages/Free/Free"

/**
 * TODO: Integrate this component
 * */
export const NotFound = () =>
    <div style={{fontFamily: "Comics", fontSize: "7rem", color: "red", display: "flex", justifyContent: "center", alignItems: "center"}}>
        Unknown page !
    </div>

export default function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/free" element={<Free />} />
                    <Route path="/contact" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </>
    )
}
