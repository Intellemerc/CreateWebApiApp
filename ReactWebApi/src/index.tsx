import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import reducer from './rootReducer';
import './index.css';

//create the redux store and pass it our first reducer and the dev tools(if they exists)
const store = createStore(
	reducer,
    window.devToolsExtension ? window.devToolsExtension() : undefined
);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
