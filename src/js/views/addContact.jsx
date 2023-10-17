import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { Link, useNavigate, useParams } from "react-router-dom";

import "../../styles/addContact.css";

export const UpdateContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { idx } = useParams();
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    useEffect (() => {
        if(idx !== undefined) {
            setFullName(store.contacts[idx].full_name)
            setAddress(store.contacts[idx].address)
            setPhone(store.contacts[idx].phone)
            setEmail(store.contacts[idx].email)
        }
    },[])

    const submitHandler = async e => {
        e.preventDefault();
        await actions.formSubmitHandler(e, idx);
        navigate('/');
    }

    return (
        <form className="container" onSubmit={submitHandler}>
            <h1>{idx === undefined ? 'Add New Contact' : 'Update Contact'}</h1>
            <div className="mb-3">
                <label for="full_name" className="form-label">Full Name</label>
                <input name="full_name" type="text" className="form-control" placeholder={idx === undefined ? "Full Name" : store.contacts[idx].full_name} value={fullName} onChange={ev => setFullName(ev.target.value)} aria-label="Full Name" aria-describedby="basic-addon2"/>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input name="email" type="text" className="form-control" placeholder={idx === undefined ? "Enter Email" : store.contacts[idx].email} value={email} onChange={ev => setEmail(ev.target.value)} aria-label="Enter Email" aria-describedby="basic-addon2"/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Phone</label>
                <input name="phone" type="text" className="form-control" placeholder={idx === undefined ? "Enter Phone" : store.contacts[idx].phone} value={phone} onChange={ev => setPhone(ev.target.value)} aria-label="Enter Phone" aria-describedby="basic-addon2"/>
            </div>
            <div className="mb-3">
                <label for="address" className="form-label">Address</label>
                <input name="address" type="text" className="form-control" placeholder={idx === undefined ? "Enter Address" : store.contacts[idx].address} value={address} onChange={ev => setAddress(ev.target.value)} aria-label="Enter Address" aria-describedby="basic-addon2"/>
            </div>
            <div className="col-12">
                <button className="btn btn-primary w-100" type='submit'>Save</button>
            </div>
            <div className="col-12">
                <Link to="/">Back to contacts</Link>
            </div>
        </form>
    )
}