import React from 'react';
import './App.css';
import logo from './logo.svg';




class App extends React.Component<{}, {}> {
    render() { 
        return (
            <div className="App"> 
                <div className="App-header">
                    <h2>Welcome to React</h2>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <p className="App-intro">
                   Edit <code>src/App.js</code> and save to reload.
                </p>
            </div>

        );
    }
}

export default App;
