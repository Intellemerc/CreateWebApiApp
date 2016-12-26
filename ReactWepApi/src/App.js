import React from 'react';
import './App.css';
const logo = require('./logo.svg');
class App extends React.Component {
    render() {
        return (React.createElement("div", { className: "App" },
            React.createElement("div", { className: "App-header" },
                React.createElement("h2", null, "Welcome to React"),
                React.createElement("img", { src: logo, className: "App-logo", alt: "logo" })),
            React.createElement("p", { className: "App-intro" },
                "Edit ",
                React.createElement("code", null, "src/App.js"),
                " and save to reload.")));
    }
}
export default App;
