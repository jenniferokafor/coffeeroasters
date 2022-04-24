import { Route, Routes } from "react-router-dom";
import Home from '../src/components/home/Home.js';
import About from "./components/about/About.js";
import Plan from "./components/plan/Plan.js";

export default function  Views () {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />}/>
            <Route path='/plan' element={<Plan />}/>
        </Routes>
    )
}