import React, { useState, useEffect } from 'react';
import CartContainer from '../cart_container/CartContainer';
import Header from '../header/Header';
import '../left_part/LeftPart.css'

const LeftPart = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('fakedb.JSON')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    const buttonClick = () => {
        console.log('clicked')
    }
    return (
        <div className="h-full bg-teal-100 p-20">
            <Header />
            <div className='cartContainer'>
                {
                    items.map(item => <CartContainer
                        key={item.id}
                        item={item}
                        eventButton={buttonClick}
                    ></CartContainer>)
                }
            </div>
        </div>
    );
};

export default LeftPart;