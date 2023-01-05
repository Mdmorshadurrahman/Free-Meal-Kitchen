import React from 'react';
import { GrLocation } from 'react-icons/gr'
import './RightPart.css'
const RightPart = (props) => {
    console.log('in right', props)
    // let temp = 0;
    // for (const time of props.totalcount) {
    //     temp = temp + time.completionTime;
    // }
    // console.log(temp)
    // props.totalcount.map(count => console.log(count.competionTime))
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
                <h3>{props.totalcount.length}</h3>
            </div>
            <div className='duration'>
                <h3>Waiting Time: </h3>
                <h3>{props.totalTime}</h3>
            </div>
            <button onClick={() => props.modalButton(props.totalcount)}>
                <div className='w-full'>
                    <label htmlFor="my-modal-3" className='cursor-pointer'>Bless Your Stomach </label>
                </div>
            </button>
        </div >
    );
};

export default RightPart;