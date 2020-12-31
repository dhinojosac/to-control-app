import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import "./Login.css";
import {login, isAuthenticated, getUser} from "../Services/AuthServices.js";
import {Redirect, useHistory} from "react-router-dom";

export default function Login(props) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");

  if (isAuthenticated()){
    //history.push("/patients");
  }

  const postLogin = (u) =>{

    axios.post('http://localhost:3002/api/v1/login', u )
    .then(result => {
        console.log(result.data);
        if(result.data.token != null){
          console.log("There is a token inside")
          login(result.data.token, result.data.user)
          console.log(getUser())
          history.push("/");
        }
    })
    .catch(error => {
      setValidation("The credentials provided are invalid", error)
      console.log(error)
    });
}

  function handleSubmit(event) {
    event.preventDefault();
    if (!email) {
      setValidation("Please enter a email");
      return ;
  }
  if (!password) {
      setValidation("Please enter a password");
      return ;
  }
    
    postLogin({ email: email,password: password});
  }

  return (
    <>
        <div className="Login">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="validation-message">{validation}</div>
            <Button block size="lg" type="submit" >
              Login
            </Button>
            <a href='h'>¿No tiene una cuenta?</a>
          </Form>
        </div>
    
  
    </>
  );
}