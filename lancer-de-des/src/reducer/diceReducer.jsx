import { useReducer } from "react";

const initialState = {
    result: 0,
    rolls: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "RESET_RESULT":
            return { ...state, result: 0, rolls: [] };
        case "SET_RESULT":
            return { ...state, result: action.payload.count, rolls: action.payload.rolls };
        default:
            return state;
    }
};

const useDiceReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const resetResult = () => {
        dispatch({ type: "RESET_RESULT" });
    };

    const setResult = ({ count, rolls }) => {
        dispatch({ type: "SET_RESULT", payload: { count, rolls } });
    };

    return { state, resetResult, setResult };
};

export default useDiceReducer;
