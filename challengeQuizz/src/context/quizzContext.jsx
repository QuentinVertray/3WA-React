// quizzContext.jsx
import React, { createContext, useReducer } from 'react';
import { quizzReducer, initialState } from '../reducer/quizzReducer.jsx';

export const QuizzContext = createContext();

export function QuizzProvider({ children }) {
    const [state, dispatch] = useReducer(quizzReducer, initialState);

    return (
        <QuizzContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizzContext.Provider>
    );
}
