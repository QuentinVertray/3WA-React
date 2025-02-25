import { SET_AMOUNT, COMPUTE_DENOMINATIONS, RESET, SET_AVAILABLE_DENOMINATIONS } from '../action-type/denomination-action-type.js';

export const setAmountAction = (amount) => {
    return { type: SET_AMOUNT, payload: amount };
};

export const computeDenominationsAction = () => {
    return { type: COMPUTE_DENOMINATIONS };
};

export const resetAction = () => {
    return { type: RESET };
};

export const setAvailableDenominationsAction = (denominations) => {
    return { type: SET_AVAILABLE_DENOMINATIONS, payload: denominations };
};
