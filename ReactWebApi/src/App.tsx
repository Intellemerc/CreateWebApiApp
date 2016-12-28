import React from 'react';
import './App.css';
const logo = require('./logo.svg');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Toggle from 'material-ui/Toggle';

import MyDrawer from './components/MyDrawer'
import MyPopover from './components/MyPopover'
import Snackbar from './components/Snackbar'

interface IState { darkTheme: boolean }

class App extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            darkTheme: true,
        };
    }
    toggleTheme = () => this.setState({ darkTheme: !this.state.darkTheme });
    render() {
        return (
            <MuiThemeProvider muiTheme={this.state.darkTheme ? getMuiTheme(darkBaseTheme) : null}>
                <div className="App">
                    <div className="App-header">
                        <h2>Welcome to React</h2>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div style={{ alignItems: 'stretch', width: '50%', height: '100%', marginRight: 'auto', marginLeft: 'auto', padding: '10px', backgroundColor: 'rgba(50%, 50%, 50%, .3)' }}>
                        <MyDrawer />
                        <br />
                        <MyPopover />
                        <br />
                        <Snackbar />
                        <br />
                        <Toggle style={{ width: '50%', marginRight: 'auto', marginLeft: 'auto'}}
                            label="Theme"
                            onToggle={this.toggleTheme}
                            />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
