import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
 
interface IState { open: boolean };

export default class MyDrawer extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return <div>
            <RaisedButton
                label="Toggle Drawer"
                onTouchTap={this.handleToggle}
                />
            <Drawer open={this.state.open}>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
 
            </Drawer>
        </div>;
    }
}