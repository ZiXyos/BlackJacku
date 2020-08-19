import React from "react";
import { Tooltip, Button} from "shards-react";

export default class ToolTipers extends React.Component {

    constructor(props) {

        super(props);
        this.toggle= this.toggle.bind(this);
        this.state = {

            top: false,
            left: false,
            bottom: false,
            right: false
        }
    };

    toggle(pos) {
        const newState = {};
        newState[pos] = !this.state[pos];
        this.setState({ ...this.state, ...newState });
    }

    render() {

        return (

            <div>

                <Button id="TooltipExample">HMMM ?? 🔞</Button>
                <Tooltip
                    placement="bottom"
                    open={this.state.bottom}
                    target="#TooltipExample"
                    toggle={() => this.toggle("bottom")}
                >
                    Femme Chaude de ta region CLIQUER ICI 🔥!
                </Tooltip>
            </div>
        );
    }
}