import React, { useContext } from 'react';
import { ExpenseContext } from '../context/expenseContext.jsx';

const TotalExpenses = () => {
    const { expenses } = useContext(ExpenseContext)

    // Calcul du total global
    const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

    // Calcul du total par catégorie
    const totalsByCategory = expenses.reduce((acc, expense) => {
        if (acc[expense.category]) {
            acc[expense.category] += expense.amount;
        } else {
            acc[expense.category] = expense.amount;
        }
        return acc;
    }, {});

    return (
        <div className="total-expenses">
            <h2>Total des Dépenses : {total.toFixed(2)}€</h2>
            <ul>
                {Object.entries(totalsByCategory).map(([category, amount]) => (
                    <li key={category}>
                        {category} : {amount.toFixed(2)}€
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TotalExpenses;