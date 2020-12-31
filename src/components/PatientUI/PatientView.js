import React, {useState, useEffect} from "react";
import axios from 'axios';
import {getToken} from "../../Services/AuthServices.js";
import "./PatientViewer.css";

export default function PatientView() {
    const [patient, setPatient] = useState([]);

    const fetchPatient = (ID) =>{
        let config = {
            headers: {
            'Authorization': 'Bearer ' + getToken()
            }
        }
        axios.get('http://localhost:3002/api/v1/patient/'+ID,config)
        .then(result => {
            setPatient(result.data);
            console.log(patient);
        })
        .catch(error => {
          console.log(error);
        });
    }

    useEffect(() =>{
        fetchPatient(1);

    }, []);


 
    return <div className="patientviewer-all">
        <div className="patientviewer-info">
            <h2>Name:  {patient.firstname} {patient.lastname}</h2>
            <p>Description:  {patient.description}</p>
        </div>
        <div className="patient-history">
            <h2>History</h2>
            <ul>
                <li>Se debe bla bla bla</li>
                <li>Se debe bla bla bla</li>
                <li>Se debe bla bla bla</li>
                <li>Se debe bla bla bla</li>
            </ul>
        </div>

    </div>
}
