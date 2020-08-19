import React, { Component } from "react";
import { Form, FormInput, FormGroup, Tooltip, Button, Modal, ModalHeader, ModalBody } from "shards-react";

export default class FormLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);
    }

        toggle() {
            this.setState({
                open: !this.state.open
            });
        }

    render() {
        const { open } = this.state;
        return (

            <Form>
                <FormGroup>
                    <label htmlFor="#username">Username</label>
                    <FormInput id="#username" placeholder="Username" />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="#password">Password</label>
                    <FormInput type="password" id="#password" placeholder="Password" />
                </FormGroup>

                <div>
                    <Button onClick={this.toggle}>Click Me!</Button>
                    <Modal open={open} toggle={this.toggle}>
                        <ModalHeader> Login Success 💯</ModalHeader>
                        <ModalBody>👋 Hello there! Welcome To Da Jungle</ModalBody>
                    </Modal>
                </div>
            </Form>
        )
    }
}