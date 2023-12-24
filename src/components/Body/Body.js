import React, { useState } from 'react';
import { fakeData } from '../../data/fakeData';
// import data from './data/data.json';
import './Body.css';
import Friend from '../Friend/Friend';
import Cart from '../Cart/Cart';


const Body = () => {
    const first15 = fakeData.slice(0,15);
    const [friends, setFriend] = useState(first15)
    const [cart, setCart] = useState([]);

    const handleAddFriend = (friend)=> {
        // console.log('product added');
        const newFriend = [...cart, friend]
        setCart(newFriend);

    }
    return (
        <div className='body-container'>
            <div className='list-container'>
                {
                    friends.map(friend => <Friend 
                        handleAddFriend = {handleAddFriend}
                        id={friend.id} friend ={friend.name} email={friend.email} phone={friend.phone}></Friend>)
                }
            </div>
            <div className='cart-container'>
                    <Cart cart = {cart}></Cart>
            </div>
        </div>

    );
};

export default Body;