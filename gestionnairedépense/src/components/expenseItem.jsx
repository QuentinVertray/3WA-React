import React, { useContext } from 'react';
import { ExpenseContext } from '../context/expenseContext.jsx';

const ExpenseItem = ({ expense }) => {
    const { dispatch } = useContext(ExpenseContext);

    const handleDelete = () => {
        dispatch({ type: 'REMOVE_EXPENSE', payload: expense.id });
    };

    return (
        <div className="expense-item">
            <div className="expense-details">
                <strong>{expense.label}</strong> - <em>{expense.category}</em>
            </div>
            <div className="expense-actions">
                <span>{expense.amount.toFixed(2)}€</span>
                <button onClick={handleDelete}>Supprimer</button>
            </div>
        </div>
    );
};

export default ExpenseItem;