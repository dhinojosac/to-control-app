import React from "react";
import Patient from "./Patient.js";

export default function PatientsList(props) {
    const {patients,onDeleteClick} = props; 

    return  <ul className="patient-front">
        
            {patients.map(patient => <li key={patient.ID}>
                <Patient details={patient} />
                <button className="btn-outline btn-delete" onClick={() => onDeleteClick(patient.ID)}>Delete</button>
            </li>)}
        </ul>;
}
