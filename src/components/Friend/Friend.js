import React from 'react';
import './Friend.css';

const Friend = (props) => {
    console.log(props);
    // const [email] = props.friend;
    return (
        <div className='friends'>
            <div>
                <img className='img' src={"https://i.postimg.cc/bJ7sz9Sd/92953473-2939431006117951-3184514080123650048-n.jpg"} alt="" />
            </div>
            <div className='info'>
                <div className='friend-zone'>
                    <table>
                        <tr><h2>{props.friend}</h2></tr>
                        <tr>ID: {props.id}</tr>
                        <tr>Email: {props.email}</tr>
                        <tr>Phone: {props.phone}</tr>
                    </table>                        
                    <div>
                    <button onClick={()=> props.handleAddFriend(props.friend)}>Add Friends</button>
                    </div>
                </div>
            
            </div>            
        </div>
    );
};

export default Friend;