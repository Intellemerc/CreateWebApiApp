import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('when the app is rendered', () => {
    let store;
    const addProvider = (Cmp) => <Provider store={store}>{Cmp}</Provider>;
    const initialState = {
        mySimpleReducer: {
            count: 0,
            list: []
        }
    };
    const mockReducer = (state = initialState) => state;

    beforeEach(() => {
        store = createStore( mockReducer );
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(addProvider( <App />), div);
    });
});