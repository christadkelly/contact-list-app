import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from "react-router-dom";

import "../../styles/home.css";

const Contact = (props) => {
    const { store, actions } = useContext(Context);
    const idx = props.idx;
    const navigate = useNavigate();

    const imageUrl='https://www.mcmurrayhatchery.com/images/global/mc/McMurrayHatchery-RhodeIslandRed-Hen2.jpg';

    const clickHandler = () => {
        navigate(`/updateContact/${idx}`);
    }

    return (
        <div className="contact">
            <img className="contact-img" src={imageUrl} alt={store.contacts[idx].full_name}></img>
            <ul>
                <li className="person-name">{store.contacts[idx].full_name}</li>
                <li className="person-address"><i className="fa-solid fa-location-dot m-1"></i>{store.contacts[idx].address}</li>
                <li className="person-info"><i className="fa-solid fa-phone-flip m-1"></i>{store.contacts[idx].phone}</li>
                <li className="person-info"><i className="fa-solid fa-envelope m-1"></i>{store.contacts[idx].email}</li>
            </ul>
            <ul className="button-container">
                <li>
                    <button className="btn" onClick={clickHandler}><i className="fa-solid fa-pencil"></i></button>
                </li>
                <li>
                    <button className="btn" data-bs-target={`#modal${idx}`} data-bs-toggle="modal"><i className="fa-regular fa-trash-can"></i></button>
                </li>
            </ul>
        </div>
            )
}

export default Contact