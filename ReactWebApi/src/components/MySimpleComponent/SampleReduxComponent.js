import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, reset } from './MySimpleReducer';
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        increment: increment,
        reset: reset
    }, dispatch);
};
const mapStateToProps = ({ mySimpleReducer }) => {
    return {
        count: mySimpleReducer.count,
        list: mySimpleReducer.list
    };
};
const style = {
    padding: 15,
    margin: 10
};
const comp = ({ increment, count, list, reset }) => {
    const subItems = list.map((l, idx) => React.createElement("div", { key: idx }, l));
    return React.createElement("div", null,
        React.createElement("button", { id: "testBttn1", onClick: () => increment(count % 5 !== 0 ? 1 : 2), style: style }, "Add"),
        React.createElement("button", { onClick: () => reset(), style: style }, "Reset"),
        subItems);
};
export default connect(mapStateToProps, mapDispatchToProps)(comp);
