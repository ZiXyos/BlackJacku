import React, { Component } from "react";
import { Form, FormInput, FormGroup } from "shards-react";

import {
    Card, CardHeader, CardTitle, CardImg,
    CardBody, CardFooter, Button, Container, Row, Col
} from "shards-react";
import { Router } from "react-router-dom";
import axios from "axios";

import Formlogin from "./inputs-connexion.component";
import FormRegister from "./inputs-register.component";
import ToolTipers from "../ToolTips/tools-tips.component";
import NavMenu_ from "../Nav/nav-bar.component"


import "../../Style/login.css"

function Cardconnection() {

    return (
        <Container className="login-reg">
            <Row>
                <div className="LoginInput" id="slide1">
                    <Col>
                        <Card>
                            <CardHeader>
                                <h4> LOGIN </h4>
                            </CardHeader>

                            <CardBody>
                                <Formlogin />
                            </CardBody>
                        </Card>
                    </Col>
                </div>

                <div className="RegisterCard" id="slide2">
                    <Col>
                        <Card>
                            <CardHeader>
                                <h4> REGISTER </h4>
                            </CardHeader>

                            <CardBody>
                                <FormRegister/>
                                <ToolTipers />
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            </Row>
        </Container>
    )
}

export default Cardconnection;