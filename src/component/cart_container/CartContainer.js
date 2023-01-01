import React, { useEffect, useState } from 'react';
import '../cart_container/CartContainer.css'

const CartContainer = (props) => {
    return (
        <div className='carts'>
            <img src={props.item.image} alt="" />
            <h2> <span> Menu {props.item.id}:</span>  {props.item.dishName}</h2>
            <p>{props.item.dishDescription}</p>
            <h3>Time Needed: {props.item.completionTime} mins</h3>
            <button onClick={props.eventButton}>Fill in your Plate</button>
        </div>
    );
};

export default CartContainer;