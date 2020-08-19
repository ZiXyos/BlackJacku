import React, { Component } from "react";
import GameTable from "./game-table.component"
import { BrowserRouter as Router, Route} from "react-router-dom";

class GamePage extends React.Component {

    render() {

        return(

            <Router>
                <h1>Game Page Component !</h1>
                 <GameTable />
            </Router>
        );
    }
}

export default GamePage;