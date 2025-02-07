import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/expenseContext.jsx";
import SelectCategory from "./selectCategory.jsx";

const ExpenseForm = () => {
    const { dispatch } = useContext(ExpenseContext);
    const [label, setLabel] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (label.trim() === '' || amount === '' || category === '') return;

        const expense = {
            id: Date.now(),
            label,
            amount: parseFloat(amount),
            category
        };

        dispatch({ type: 'ADD_EXPENSE', payload: expense });

        // Réinitialisation des champs du formulaire
        setLabel('');
        setAmount('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit} className="expense-form">
            <div>
                <label>Libellé :</label>
                <input
                    type="text"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    placeholder="Ex : Café, Course..."
                />
            </div>
            <div>
                <label>Montant (€) :</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Ex : 10.50"
                />
            </div>
            <div>
                <label>Catégorie :</label>
                <SelectCategory value={category} onChange={setCategory} />
            </div>
            <button type="submit">Ajouter dépense</button>
        </form>
    );
};

export default ExpenseForm;