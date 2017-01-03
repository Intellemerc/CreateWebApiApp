import React from 'react';

export default ({addItems}) => {
    return <div>
        <h3>Welcome to my Test Component</h3>
        Test Component
        <br />
        <button id="testBttn1" onClick={addItems} >test</button>
    </div>;
}