import React, { useReducer, useEffect } from 'react';

const initialState = { value: "" };

const selectReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return { value: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const SelectCategory = ({ value, onChange }) => {
    const [state, dispatch] = useReducer(selectReducer, { value: value || "" });

    // À chaque changement, on informe le parent
    useEffect(() => {
        onChange(state.value);
    }, [state.value, onChange]);

    const handleChange = (e) => {
        dispatch({ type: 'CHANGE', payload: e.target.value });
    };

    return (
        <select value={state.value} onChange={handleChange}>
            <option value="">---</option>
            <option value="Alimentation">Alimentation</option>
            <option value="Logement">Logement</option>
            <option value="Transport">Transport</option>
            <option value="Divertissement">Divertissement</option>
            <option value="Santé">Santé</option>
            <option value="Éducation">Éducation</option>
            <option value="Autres">Autres</option>
        </select>
    );
};

export default SelectCategory;