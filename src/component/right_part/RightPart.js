import React from 'react';
import { GrLocation } from 'react-icons/gr'
import './RightPart.css'
const RightPart = () => {
    return (
        <div className="wallet h-full bg-indigo-100">
            <div className='chef'>
                <img src="https://i.ibb.co/RHbkN4L/DSC-0003-2.jpg" alt="" />
                <div className='bio'>
                    <h1>CHEF</h1>
                    <h3>Md Morshadur Rahman</h3>
                    <p><GrLocation className='inline-block' /> Aachen,Germany</p>
                </div>
            </div>
            <div className='plate'>
                <h2>Your Plate: </h2>
            </div>
            <div className='plateDetails'>
                <h3>Total Items:</h3>
                <h3></h3>
            </div>
            <div className='duration'>
                <h3>Waiting Time: </h3>
                <h3></h3>
            </div>
            <button >Bless Your Stomach</button>
        </div >
    );
};

export default RightPart;