import { findAllByAltText } from '@testing-library/react';
import { error } from 'daisyui/src/colors/colorNames';
import React, { useState, useEffect } from 'react';
import CartContainer from '../cart_container/CartContainer';
import Header from '../header/Header';
import '../left_part/LeftPart.css'
import RightPart from '../right_part/RightPart';

const LeftPart = () => {

    const [items, setItems] = useState([])
    const [count, setCount] = useState([])
    const [waitingTime, setWaitingTime] = useState(0)
    useEffect(() => {
        fetch('fakedb.JSON')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const buttonClick = (item) => {
        if (count.find(x => x.id === item.id)) {
            console.log('id exist')
            alert("already added")
        }
        else {
            console.log(item.completionTime)
            const newCount = [...count, item];
            setCount(newCount);
            setWaitingTime(prevState => prevState + item.completionTime)
        }
    }
    const modalButton = (count) => {
        console.log(count)
        if (count.length === 0) {
            alert('No Item Added Yet!')
            return 0;
        }
    }
    return (
        <div className='mainContainer' >
            <div className="h-full w-8/12 bg-teal-100 p-20">
                <Header />
                <div className='w-full cartContainer'>
                    {
                        items.map(item => <CartContainer
                            key={item.id}
                            item={item}
                            eventButton={buttonClick}
                        ></CartContainer>)

                    }
                </div>
            </div>
            <div className='w-4/12 ' >
                <RightPart totalcount={count}
                    totalTime={waitingTime}
                    modalButton={modalButton} />
            </div>
        </div>
    );
};

export default LeftPart;