import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/index.jsx";
import Error404 from "../pages/404/index.jsx";

// import ElectronicsPage from "../pages/electronics/index.jsx";
// import AllCategoryDetails from "../components/AllCategoryDetails.jsx";

const RouterIndex = () => {
    return (
        <div className="RouterIndex">
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="*" element={<Error404/>} />   
              
                

            </Routes>
        </div>
    );
};
export default RouterIndex;
