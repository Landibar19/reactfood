import React from "react";
import OrderFood from "./components/OrderFood/Presentational";

import "./Styles.scss"


const Main = () => {

    return (
        <>
        <div className="main-container">
            <div className="main-info">
            <div className="inputBox textarea">
            <p>Delicious Food, Delivery To You
            Choose your favorite meal from our broad selection of available meals 
            and enjoy a delicious lunch or dinner at home.
            All our meals are cooked with high-quality ingredients, 
            just-in-time and of course by experenced chefs!</p>
            </div>
            </div>
        </div>
        <OrderFood/>
        </>
    );
};

export default Main