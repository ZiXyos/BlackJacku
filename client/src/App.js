import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Cardconnection from "./Components/Login/card-connexion.component"
import GamePage from "./Components/Game/game-page.component"
import DashboardPage from "./Components/Dashboard/dashboard-page.component"

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./Style/style.css"

class App extends Component {

    render() {

        return(
            <div className="main">
                <Router>
                    <Route path="/"/>
                    <Route path="/connexion" exact component={ Cardconnection } />
                    <Route path="/Game" exact component={ GamePage } />
                    <Route path="/DashBoard" exact component={ DashboardPage } />
                </Router>
            </div>
        );
    }
}

export default App;