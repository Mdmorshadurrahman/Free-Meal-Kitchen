import React from 'react';
import './Header.css';
import { MdFoodBank } from 'react-icons/md';
import { CiFaceSmile } from 'react-icons/ci';

const Header = () => {
    return (
        <div className='Header'>
            <h1 className='title'><span ><MdFoodBank /></span> FREE-MEAL-KITCHEN</h1>
            <h2 className='subtitle ml-4'>We Deliver Happiness <span > <CiFaceSmile /></span></h2>
        </div >
    );
};

export default Header;