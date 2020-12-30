import React from "react";

export default function AddPatientForm(props) {
    const {onSubmit, firstname, lastname, description, validation, onFirstNameChange, onLastNameChange,onDescriptionChange}=props;

    return  <form onSubmit={onSubmit} className="patient-form">
            <div>
            <label htmlFor="patient-first-name">First Name:</label>
            <input type="text" value={firstname} onChange={onFirstNameChange} id="patient-first-name" placeholder="Enter the first name" className="textfield" />
            </div>
            <div>
            <label htmlFor="patient-last-name">Last Name:</label>
            <input type="text" value={lastname} onChange={onLastNameChange} id="patient-last-name" placeholder="Enter the last name" className="textfield" />
            </div>
            <div>
            <label htmlFor="patient-description">Description:</label>
            <input type="text" value={description} onChange={onDescriptionChange} id="patient-description" placeholder="Enter the description" className="textfield" />
            </div>
            <div className="form-footer">
            <div className="validation-message">{validation}</div>
            <input type="submit" className="btn btn-primary" value="Add patient" />
            </div>
        </form>;
}
