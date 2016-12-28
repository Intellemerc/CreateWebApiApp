import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
export default class SnackbarExampleSimple extends React.Component {
    constructor(props) {
        super(props);
        this.handleTouchTap = () => {
            this.setState({
                open: true,
            });
        };
        this.handleRequestClose = () => {
            this.setState({
                open: false,
            });
        };
        this.state = {
            open: false,
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(RaisedButton, { onTouchTap: this.handleTouchTap, label: "Add to my calendar" }),
            React.createElement(Snackbar, { open: this.state.open, message: "Event added to your calendar", autoHideDuration: 4000, onRequestClose: this.handleRequestClose })));
    }
}
