// Link.react-test.js
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import myCmpReducer from './MySimpleReducer';


type toJson = (any) => any;

import { SimpleComponent } from './MySimpleComponent';

describe("Simple Component tests", () => {
    let component;
    let increment;

    beforeEach(() => {
        increment = jest.fn();
        component = shallow(<SimpleComponent count="0" list={[]} increment={increment}/>);
    });

    it('when the component is rendered', () => {
        const json = toJson(component);

        expect(json.type).toBe("div")
    });
    it('when the new item button is clicked it executes the addItems prop', () => {
        const testBttn = component.find('#testBttn1');

        testBttn.simulate('click');
        expect(increment.mock.calls.length).toBe(1)
    })

    it('the first child is the welcome text', () => {
        const json = toJson(component);

        const firstChild = json.children[0];
        expect(firstChild.type).toBe("h3");
        expect(firstChild.children[0]).toBe('Welcome to my Test Component')
    })
});

describe("Simple component reducer tests", () => {
    test('reducer starts off in an expected initial state', () => {
        let state = undefined;
        let action = {};

        let newState = myCmpReducer(state, action);
        expect(newState).toEqual( { count: 1, list: [] } );
    });

    test('reducer calls increment', () => {
        let state = { count: 1, list: [] };
        let action = { type: 'INCREMENT', payload: 1 }

        state = myCmpReducer(state, action);
        expect(state).toEqual({ count: 2, list: ['some new item 1'] });

    });
});