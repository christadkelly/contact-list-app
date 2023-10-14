import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Add a new contact</h1>
			<form>
				<div className="mb-3">
					<label for="fname" className="form-label">Full Name</label>
					<input type="text" className="form-control" id="fname" name="fname" placeholder="Full Name" onChange={ev => setNewName(ev.target.value)}></input>
				</div>
				<div className="mb-3">
					<label for="email" className="form-label">Email</label>
					<input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={ev => setNewEmail(ev.target.value)}></input>
				</div>
				<div className="mb-3">
					<label for="email" className="form-label">Phone</label>
					<input type="text" className="form-control" id="phone" name="phone" placeholder="Enter phone" onChange={ev => setNewPhone(ev.target.value)}></input>
				</div>
				<div className="mb-3">
					<label for="email" className="form-label">Address</label>
					<input type="text" className="form-control" id="address" name="address" placeholder="Enter address" onChange={ev => setNewAddress(ev.target.value)}></input>
				</div>	
			</form>
			{/* <Link to="/"> */}
				<div className="d-grid">
					<button className="btn btn-primary">save</button>
				</div>
			{/* </Link> */}
			<div>
				<Link to="/">
					Back to contacts
				</Link>
			</div>
		</div>
	)
};
