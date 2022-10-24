import Home from "../screens/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Home()}></Route>
                <Route path="/*" element={<div><p>ERROR</p></div>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;