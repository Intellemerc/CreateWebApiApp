import React from 'react';
import './App.css';
const logo = require('./logo.svg');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper'

import MyDrawer from './components/MyDrawer'
import MyPopover from './components/MyPopover'
import Snackbar from './components/Snackbar'
import MySampleComponent from './components/MySimpleComponent'; 

interface IState { darkTheme?: boolean, items?: any[] }

let counter = 0;
class App extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            darkTheme: true,
            items: []
        };
    }
    toggleTheme = () => this.setState({ darkTheme: !this.state.darkTheme });

    addItems = () => {
        const newItems = [
            ...this.state.items,
            <div key={counter}>some new item {counter++} </div>
        ]
        this.setState({ items: newItems })
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={this.state.darkTheme ? getMuiTheme(darkBaseTheme) : null}>
                <div className="App">
                    <div className="App-header">
                        <h2>Welcome to React</h2>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div style={{ margin: 'auto', width: 400 }}>
                        <Paper zDepth={3} style={{ margin: 25 }}>
                            <MySampleComponent />
                            {this.state.items}
                        </Paper>
                        <Paper zDepth={3} style={{ margin: 25 }}>
                            <MyDrawer />
                            <br />
                            <MyPopover />
                            <br />
                            <Snackbar />
                            <br />
                            <Toggle style={{ width: '50%', margin: 'auto' }}
                                label="Theme"
                                onToggle={this.toggleTheme}
                                />
                        </Paper>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
