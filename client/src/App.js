import React, { Component } from "react";
import { BrowserRouter as Router} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import NavMenu_ from "./Components/nav-bar.component";
import Cardconnection from "./Components/card-connexion.component"

import "./Style/style.css"

class App extends Component {

    render() {

        return(
            <div className="main">
                <Router>
                    <NavMenu_ />
                    <Cardconnection />
                </Router>
            </div>
        );
    }
}

export default App;