// Link.react-test.js
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

type toJson = (any) => any;

import SimpleComponent from './MySimpleComponent';

describe("Simple Component tests", () => {
    let component;
    const addItems = jest.fn();

    beforeEach(() => {
        component = shallow(<SimpleComponent addItems={addItems} />);
    });

    it('when the component is rendered', () => {
        const json = toJson(component);

        expect(json.type).toBe("div")
    });
    it('when the new item button is clicked it executes the addItems prop', () => {
        const testBttn = component.find('#testBttn1');

        testBttn.simulate('click');
        expect(addItems.mock.calls.length).toBe(1)
    })

    it('the first child is the welcome text', () => {
        const json = toJson(component);

        const firstChild = json.children[0];
        expect(firstChild.type).toBe("h1");
        expect(firstChild.children[0]).toBe('Welcome to my Test Component')
    })
});