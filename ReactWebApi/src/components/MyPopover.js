import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
export default class MyPopover extends React.Component {
    constructor(props) {
        super(props);
        this.handleTouchTap = (event) => {
            // This prevents ghost click.
            event.preventDefault();
            this.setState({
                open: true,
                anchorEl: event.currentTarget,
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
            React.createElement(RaisedButton, { onTouchTap: this.handleTouchTap, label: "Click me" }),
            React.createElement(Popover, { open: this.state.open, anchorEl: this.state.anchorEl, anchorOrigin: { horizontal: 'left', vertical: 'bottom' }, targetOrigin: { horizontal: 'left', vertical: 'top' }, onRequestClose: this.handleRequestClose },
                React.createElement(Menu, null,
                    React.createElement(MenuItem, { primaryText: "Refresh" }),
                    React.createElement(MenuItem, { primaryText: "Help & feedback" }),
                    React.createElement(MenuItem, { primaryText: "Settings" }),
                    React.createElement(MenuItem, { primaryText: "Sign out" })))));
    }
}
