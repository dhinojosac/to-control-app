import React, {useState, useEffect} from "react";
import AddPatientForm from "./AddPatientForm.js"
import PatientsList from "./PatientsList.js";
import axios from 'axios';
import "./Patient.css";
import {getToken} from "../../Services/AuthServices.js";

export default function PatientFront() {
    const [patients, setPatients] = useState([]);
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [description, setDescription] = useState("");
    const [validation, setValidation] = useState("");

    const fetchPosts = () =>{
            let config = {
                headers: {
                'Authorization': 'Bearer ' + getToken()
                }
            }
            axios.get('http://localhost:3002/api/v1/patient',config)
            .then(result => {
                setPatients(result.data);
                console.log(patients);
            })
            .catch(error => {
              console.log(error);
            });
    }

    const createPatient = (p) =>{
        let config = {
            headers: {
            'Authorization': 'Bearer ' + getToken()
            }
        }
        axios.post('http://localhost:3002/api/v1/patient', p, config)
        .then(result => {
            console.log(result);
            fetchPosts();
        })
        .catch(error => {
          console.log(error);
        });
    }

    const deletePatient = (ID) =>{
        let config = {
            headers: {
            'Authorization': 'Bearer ' + getToken()
            }
        }
        console.log(ID)
        axios.delete('http://localhost:3002/api/v1/patient/'+ID, config)
        .then(result => {
            console.log(result);
            fetchPosts();
        })
        .catch(error => {
          console.log(error);
        });
    }

    useEffect(() =>{
        fetchPosts();

    }, []);


    function handleFormSubmit(event) {
        event.preventDefault();

        if (!firstname) {
            setValidation("Please enter a first name");
            return ;
        }
        if (!lastname) {
            setValidation("Please enter a last name");
            return ;
        }
        if (!description){
            setValidation("Please enter a description");
            return ;
        }

        createPatient({ firstname: firstname,
            lastname: lastname,
            description: description});
        
       
        setFirstName("");
        setLastName("");
        setDescription("");
        setValidation("");
    }

    function handleDeleteClick(ID) {
        deletePatient(ID);
    }

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    return <>
        <AddPatientForm 
            onSubmit={handleFormSubmit}
            firstname={firstname}
            lastname={lastname}
            description={description}
            validation={validation}
            onFirstNameChange={handleFirstNameChange}
            onLastNameChange={handleLastNameChange}
            onDescriptionChange={handleDescriptionChange}
        />
        
        <PatientsList 
            patients={patients} 
            onDeleteClick={handleDeleteClick}
                /> 
      
        
    </>;

}