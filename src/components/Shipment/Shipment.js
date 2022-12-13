import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [user] = useAuthState(auth)

    const handlePhone = (event) => {
        setPhone(event.target.value);
    }
    const handleAddress = (event) => {
        setAddress(event.target.value);
    }
    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleShipment = (event) => {
        event.preventDefault();
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Shipment</h1>
            <form onSubmit={handleShipment}>
                <div>
                    <div className="input-group">
                        <label htmlFor="Name">Name</label>
                        <input onBlur={handleName} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly="true" name="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddress} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input onBlur={handlePhone} type="text" name="phone" id="" required />
                    </div>

                    <input className="submit-btn" type="submit" value="Shipment" />

                </div>

            </form >
        </div>
    );
};

export default Shipment;