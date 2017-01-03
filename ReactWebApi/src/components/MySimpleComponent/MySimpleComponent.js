import React from 'react';
import ReduxComp from './SampleReduxComponent';
export default () => {
    return React.createElement("div", null,
        React.createElement("h3", null, "Welcome to my Test Component"),
        "Test Component",
        React.createElement("br", null),
        React.createElement(ReduxComp, null));
};
