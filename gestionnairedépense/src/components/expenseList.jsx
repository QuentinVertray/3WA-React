import React, { useContext } from 'react';
import { ExpenseContext } from '../context/expenseContext.jsx';
import ExpenseItem from './expenseItem.jsx';

const ExpenseList = () => {
    const { expenses } = useContext(ExpenseContext);

    return (
        <div className="expense-list">
            {expenses.length > 0 ? (
                expenses.map(expense => (
                    <ExpenseItem key={expense.id} expense={expense} />
                ))
            ) : (
                <p>Aucune dépense enregistrée.</p>
            )}
        </div>
    );
};

export default ExpenseList;