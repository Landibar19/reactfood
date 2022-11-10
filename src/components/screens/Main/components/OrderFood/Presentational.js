import React from "react";

import "./Styles.scss"


const OrderFood = () => {
    return (
        <>
    <div className="order-food">
        <div className="amount">
            <span className="amount">amount</span> 
        </div>
        <div className="name">name</div>
        <div  className="price">price</div>
    </div>
     <div className="order-food">
     <div className="amount">
         <span className="amount">amount</span>
        
     </div>
     <div className="name">name</div>
     <div  className="price">price</div>
 </div>
 <div className="order-food">
        <div className="amount">
            <span className="amount">amount</span>
           
        </div>
        <div className="name">name</div>
        <div  className="price">price</div>
    </div>
    <div className="order-food">
        <div className="amount">
            <span className="amount">amount</span>
           
        </div>
        <div className="name">name</div>
        <div  className="price">price</div>
    </div>
    </>
    );
};

export default OrderFood