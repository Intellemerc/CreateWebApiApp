export const INCREMENT = 'INCREMENT';
export const RESET = 'RESET';

interface SampleState { count: number, list: any[] }
const initialState: SampleState = {
    count: 1,
    list: []
};

export const increment = (amount: number) => {
    return {
        type: INCREMENT,
        payload: amount
    }
}

export const reset = () => {
    return {
        type: RESET,
        payload: null
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RESET:
            state = initialState
            break;
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload,
                list: [
                    ...state.list,
                    `some new item ${state.count}`
                ]
            }
        default:
            break;
    }
    return state;
}
