import Home from "../screens/Home/Home";
import Crypto from "./Crypto/Crypto";
import CoinDetail from "../components/Crypto/Coin/Coin_detail";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Home()}></Route>
                <Route path="/crypto" element={Crypto()}></Route>
                <Route path="/crypto/:coinId" element={<CoinDetail/>}></Route>
                <Route path="/*" element={<div><p>ERROR</p></div>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;