import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
;
export default class MyDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = () => this.setState({ open: !this.state.open });
        this.state = { open: false };
    }
    render() {
        return React.createElement("div", null,
            React.createElement(RaisedButton, { label: "Toggle Drawer", onTouchTap: this.handleToggle }),
            React.createElement(Drawer, { open: this.state.open },
                React.createElement(MenuItem, null, "Menu Item"),
                React.createElement(MenuItem, null, "Menu Item 2")));
    }
}
