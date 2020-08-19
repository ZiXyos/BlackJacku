import React, { Component } from "react";
import { Form, FormInput, FormGroup, Tooltip, Button, Modal, ModalHeader, ModalBody } from "shards-react";
import axios from "axios";

import makeToast from "../Toaster/Toaster";

class FormLogin extends React.Component {

    constructor(props) {

        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    loginUser = props => {
        const email = this.str;
        const password = this.str;

        axios.post("http://localhost:5000/user/login", { email, password })
            .then( res => {

                localStorage.setItem("CC_Token", res.data.token);
               // props.history.push("/dashboard");
            }).catch( err => {
                console.log({email: email, password: password});
                if (err && err.res && err.res.data && err.res.data.message )
                    makeToast("error", err.res.data.message);
                });
    };

    render() {
        const { open } = this.state;

        return (

            <Form>
                <FormGroup>
                    <label htmlFor="#email">email</label>
                    <FormInput id="#email" placeholder="email" ref={this.emailRef} />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="#password">Password</label>
                    <FormInput type="password" id="#password" placeholder="Password" ref={this.passwordRef} />
                </FormGroup>

                <div>
                    <Button onClick={this.loginUser}>Click Me!</Button>
                    <Modal open={open} toggle={this.toggle}>
                        <ModalHeader> Login Success 💯</ModalHeader>
                        <ModalBody>👋 Hello there! Welcome To Da Jungle</ModalBody>
                    </Modal>
                </div>
            </Form>
        )
    }
}

export default FormLogin;