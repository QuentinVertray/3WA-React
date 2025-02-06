import { useReducer } from "react";

const initialState = {
    result: "",
    error: "",
    expression: "",
    lastResult: null,
    lastOperator: null,
    lastOperand: null
};


const getUpdatedExpression = (state, value) => (state.result || state.expression) + value;

const reducer = (state, action) => {
    switch (action.type) {
        case "set_value":
            return {
                ...state,
                expression: getUpdatedExpression(state, action.payload.value),
                result: "",
                error: ""
            };

        case "set_operator":
            return {
                ...state,
                expression: getUpdatedExpression(state, action.payload.value),
                lastResult: state.result || state.lastResult,
                lastOperator: action.payload.value,
                lastOperand: null,
                result: "",
                error: ""
            };

        case "calculate":
            try {
                let newResult;

                if (state.lastOperator && state.lastOperand !== null) {
                    newResult = eval(`${state.result} ${state.lastOperator} ${state.lastOperand}`);
                } else {
                    newResult = eval(state.expression);
                }

                return {
                    ...state,
                    result: newResult.toString(),
                    expression: newResult.toString(),
                    lastResult: newResult,
                    lastOperand: state.lastOperand !== null
                        ? state.lastOperand
                        : parseFloat(state.expression.split(state.lastOperator).pop()),
                    error: ""
                };
            } catch (e) {
                return { ...state, error: "Erreur de calcul", result: "", expression: "" };
            }

        case "reset":
            return initialState;

        default:
            return state;
    }
};

const useCalculateReducer = () => useReducer(reducer, initialState);

export default useCalculateReducer;
