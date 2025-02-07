import React, { createContext, useReducer } from "react";
import { expenseReducer } from "../reducer/expenseReducer.jsx";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, dispatch] = useReducer(expenseReducer, []);
    return (
        <ExpenseContext.Provider value={{ expenses, dispatch }}>
            {children}
        </ExpenseContext.Provider>
    );
};