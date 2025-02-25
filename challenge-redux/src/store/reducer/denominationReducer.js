import { SET_AMOUNT, COMPUTE_DENOMINATIONS, RESET, SET_AVAILABLE_DENOMINATIONS } from '../action-type/denomination-action-type.js';

const initialState = {
    amount: "",
    result: {},
    availableDenominations: [100, 50, 1] // Par défaut (Partie 1)
};

const denominationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AMOUNT:
            return { ...state, amount: action.payload };
        case COMPUTE_DENOMINATIONS: {
            const amountNum = parseInt(state.amount, 10);
            if (isNaN(amountNum) || amountNum < 0) return state;
            let remainder = amountNum;
            const result = {};
            state.availableDenominations.forEach((denom) => {
                result[denom] = Math.floor(remainder / denom);
                remainder = remainder % denom;
            });
            return { ...state, result };
        }
        case RESET:
            return { ...state, amount: "", result: {} };
        case SET_AVAILABLE_DENOMINATIONS:
            return { ...state, availableDenominations: action.payload };
        default:
            return state;
    }
};

export default denominationReducer;
