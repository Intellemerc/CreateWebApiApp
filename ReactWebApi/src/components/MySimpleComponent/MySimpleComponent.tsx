import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { increment, reset } from './MySimpleReducer'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        increment: increment,
        reset: reset
    }, dispatch);
}

const mapStateToProps = ({mySimpleReducer}) => {
    return {
        count: mySimpleReducer.count,
        list: mySimpleReducer.list
    }
}

const style = {
    padding: 15,
    margin: 10
}

export const SimpleComponent = ({increment, count, list, reset}) => {
    const subItems = list.map((l, idx) => <div key={idx} >{l}</div>);
    return <div>
        <h3>Welcome to my Test Component</h3>
        Test Component
        <br />

        <button id="testBttn1" onClick={() => increment(1)} style={style} >Add</button>
        <button onClick={reset} style={style} >Reset</button>
        {subItems}
    </div>;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SimpleComponent);