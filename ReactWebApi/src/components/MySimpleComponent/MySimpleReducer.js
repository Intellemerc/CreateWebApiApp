var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
export const INCREMENT = 'INCREMENT';
export const RESET = 'RESET';
const initialState = {
    count: 1,
    list: []
};
export const increment = (amount) => {
    return {
        type: INCREMENT,
        payload: amount
    };
};
export const reset = () => {
    return {
        type: RESET,
        payload: null
    };
};
export default (state = initialState, action) => {
    switch (action.type) {
        case RESET:
            state = initialState;
            break;
        case INCREMENT:
            return __assign({}, state, { count: state.count + action.payload, list: [
                    ...state.list,
                    `some new item ${state.count}`
                ] });
        default:
            break;
    }
    return state;
};
