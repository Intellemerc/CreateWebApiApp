import React from 'react';
import './App.css';
const logo = require('./logo.svg');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Toggle from 'material-ui/Toggle';
import MyDrawer from './components/MyDrawer';
import MyPopover from './components/MyPopover';
import Snackbar from './components/Snackbar';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => this.setState({ darkTheme: !this.state.darkTheme });
        this.state = {
            darkTheme: true,
        };
    }
    render() {
        return (React.createElement(MuiThemeProvider, { muiTheme: this.state.darkTheme ? getMuiTheme(darkBaseTheme) : null },
            React.createElement("div", { className: "App" },
                React.createElement("div", { className: "App-header" },
                    React.createElement("h2", null, "Welcome to React"),
                    React.createElement("img", { src: logo, className: "App-logo", alt: "logo" })),
                React.createElement("div", { style: { alignItems: 'stretch', width: '50%', height: '100%', marginRight: 'auto', marginLeft: 'auto', padding: '10px', backgroundColor: 'rgba(50%, 50%, 50%, .3)' } },
                    React.createElement(MyDrawer, null),
                    React.createElement("br", null),
                    React.createElement(MyPopover, null),
                    React.createElement("br", null),
                    React.createElement(Snackbar, null),
                    React.createElement("br", null),
                    React.createElement(Toggle, { style: { width: '50%', marginRight: 'auto', marginLeft: 'auto' }, label: "Theme", onToggle: this.toggleTheme })))));
    }
}
export default App;
