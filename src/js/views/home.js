import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";

const Contact = ({ contact, index }) => {
	const { actions } = useContext(Context);
	const imageUrl = 'https://www.mcmurrayhatchery.com/images/global/mc/McMurrayHatchery-RhodeIslandRed-Hen2.jpg';

	return (
		<div className="contact">
			  <img className="contact-image" src= {imageUrl} />
			  <ul>
				<li className="person-name">{contact.full_name}</li>
				<li className="person-address"><i className="fa-solid fa-location-dot m-1"></i>{contact.address}</li>
				<li className="person-info"><i className="fa-solid fa-phone-flip m-1"></i>{contact.phone}</li>
				<li className="person-info"><i className="fa-solid fa-envelope m-1"></i>{contact.email}</li>
			  </ul>
			  <div className="button-container">
				<button className="btn"><i className="fa-solid fa-pencil"></i></button>
				  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#deleteModal">
					<i class="fa-solid fa-trash"></i>
				</button>
				<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							   <div class="modal-header">
								   <h5 class="modal-title">Are you sure?</h5>
								   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							   </div>
							  <div class="modal-body">
								 <p>If you delete this thing the entire universe will go down!</p>
							 </div>
							<div class="modal-footer">
								<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
								<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Yes baby!</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)

}

export const Home = () => {
	const {store, actions} = useContext(Context);
	
	return (
		<div className="container">
      		<div className="row my-2">
        		<div>
					<Link to="/contact">
						<button className="btn btn-success mt-1 add">
            			Add New Contact
          				</button>
					</Link>
        		</div>
      		</div>
      		<div className="contacts-container">
			  	<div>
          			{store.contacts.map((contact, idx) => (
            		<Contact contact={contact} index={idx} key={idx} />
          			))}
        		</div>
      		</div>
    	</div>
	)
};
