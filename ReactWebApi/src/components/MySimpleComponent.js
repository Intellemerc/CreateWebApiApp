import React from 'react';
export default ({ addItems }) => {
    return React.createElement("div", null,
        React.createElement("h3", null, "Welcome to my Test Component"),
        "Test Component",
        React.createElement("br", null),
        React.createElement("button", { id: "testBttn1", onClick: addItems }, "test"));
};
