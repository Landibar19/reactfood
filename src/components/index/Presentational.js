import React from "react";
import Main from "../screens/Main/Presentational";

import "./Styles.scss"

const AppIndex = () => {

    return (
        <>
        <div className="app-index-container">
            <div className="header">
                <p>ReactMeals</p>
                <button type="button" className="shopping-cart-button float-right" data-toggle="shopping-cart-dropdown">
                    <i class="fa fa-shopping-cart"></i>
                    <span class="text">Your Cart</span>
                </button>
         </div>
            <Main/>
        </div>
        </>
    
    );
};

export default AppIndex