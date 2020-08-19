import React, { Component } from "react";
import { Form, FormInput, FormGroup } from "shards-react";


export default function FormRegister() {

    return(

        <Form>
            <FormGroup>
                <label htmlFor="#username">Username</label>
                <FormInput id="#username" placeholder="Username" />
            </FormGroup>

            <FormGroup>
                <label htmlFor="#email">Email</label>
                <FormInput id="#email" placeholder="Email" />
            </FormGroup>

            <FormGroup>
                <label htmlFor="#password">Password</label>
                <FormInput type="password" id="#password" placeholder="Password" />
            </FormGroup>

            <FormGroup>
                <label htmlFor="#password">Password</label>
                <FormInput type="password" id="#password2" placeholder="Password" />
            </FormGroup>
        </Form>
    );
 }