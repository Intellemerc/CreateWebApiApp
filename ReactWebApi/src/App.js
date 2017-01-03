import React from 'react';
import './App.css';
const logo = require('./logo.svg');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import MyDrawer from './components/MyDrawer';
import MyPopover from './components/MyPopover';
import Snackbar from './components/Snackbar';
import MySampleComponent from './components/MySimpleComponent';
let counter = 0;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => this.setState({ darkTheme: !this.state.darkTheme });
        this.addItems = () => {
            const newItems = [
                ...this.state.items,
                React.createElement("div", { key: counter },
                    "some new item ",
                    counter++,
                    " ")
            ];
            this.setState({ items: newItems });
        };
        this.state = {
            darkTheme: true,
            items: []
        };
    }
    render() {
        return (React.createElement(MuiThemeProvider, { muiTheme: this.state.darkTheme ? getMuiTheme(darkBaseTheme) : null },
            React.createElement("div", { className: "App" },
                React.createElement("div", { className: "App-header" },
                    React.createElement("h2", null, "Welcome to React"),
                    React.createElement("img", { src: logo, className: "App-logo", alt: "logo" })),
                React.createElement("div", { style: { margin: 'auto', width: 400 } },
                    React.createElement(Paper, { zDepth: 3, style: { margin: 25 } },
                        React.createElement(MySampleComponent, { addItems: this.addItems }),
                        this.state.items),
                    React.createElement(Paper, { zDepth: 3, style: { margin: 25 } },
                        React.createElement(MyDrawer, null),
                        React.createElement("br", null),
                        React.createElement(MyPopover, null),
                        React.createElement("br", null),
                        React.createElement(Snackbar, null),
                        React.createElement("br", null),
                        React.createElement(Toggle, { style: { width: '50%', margin: 'auto' }, label: "Theme", onToggle: this.toggleTheme }))))));
    }
}
export default App;
