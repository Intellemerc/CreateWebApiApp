import React from 'react';
import './App.css';
const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
    render() { 
        return (
            <div className="App"> 
                <div className="App-header">
                    <h2>Welcome to React</h2>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <p className="App-intro">
                   Code from the 2.HookupToBuild Branch
                </p>
            </div>

        );
    }
}

export default App;
