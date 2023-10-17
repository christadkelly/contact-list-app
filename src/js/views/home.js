import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'

import "../../styles/home.css";

import Contact from '../component/Contact.jsx'
import Modal from '../component/Modal.jsx'


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
	<div className="container">
		<div className="row my-2">
			<div>
				<Link to="/updateContact">
					<button className="btn btn-success mt-1 add">
						Add New Contact
					</button>
				</Link>
			</div>
		</div>
		<div className="contacts-container">
			<div>
				{store.contacts.sort().map((contact, idx) => <Contact idx={idx} key={idx}/>)}
				{store.contacts.sort().map((contact, idx) => <Modal id={contact.id} idx={idx}/>)}
			</div>
		</div>
	</div>
	)
};
