import React from "react";
import Patient from "./Patient.js";

export default function PatientsList(props) {
    const {patients,onDeleteClick} = props; 

    return  <ul className="patient-front">
        
            {patients.map(patient => <li key={patient.ID}>
                <Patient details={patient} />
                <button className="btn-outline btn-delete" onClick={() => {
                        if(window.confirm(`Are you sure you want to delete ${patient.firstname} ${patient.lastname}?`)){
                            onDeleteClick(patient.ID)
                        }
                    }}
                    >Delete</button>
                <button className="btn-outline btn-delete"
                    
                >Edit</button>
            </li>)}
        </ul>;
}

