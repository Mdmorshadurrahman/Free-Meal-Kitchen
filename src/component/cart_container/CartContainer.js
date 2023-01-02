import React, { useEffect, useState } from 'react';
import '../cart_container/CartContainer.css'
import RightPart from '../right_part/RightPart';

const CartContainer = (props) => {
    // console.log(props)
    return (
        <div className='carts'>
            <img src={props.item.image} alt="" />
            <h2> <span> Menu {props.item.id}:</span>  {props.item.dishName}</h2>
            <p>{props.item.dishDescription}</p>
            <h3>Time Needed: {props.item.completionTime} mins</h3>
            <button className='mx-auto' onClick={() => props.eventButton(props.item)}>Fill in your Plate</button>
        </div>
    );
};

export default CartContainer;
