import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setAvailableDenominationsAction } from '../../store/action/denomination-action.js';

const Container = styled.div`
    max-width: 500px;
    margin: 2rem auto;
    padding: 1rem;
    text-align: center;
`;

const OptionWrapper = styled.div`
    margin: 1rem 0;
`;

const ChangeDenominationPage = () => {
    const dispatch = useDispatch();
    const options = [
        { id: 1, label: "Dénomination 1, 5, 10, 20, 50, 100", values: [1, 5, 10, 20, 50, 100] },
        { id: 2, label: "Dénomination 1, 2, 5, 10, 20, 30, 50", values: [1, 2, 5, 10, 20, 30, 50] },
        { id: 3, label: "Dénomination 1, 10, 20, 30, 40, 50, 100", values: [1, 10, 20, 30, 40, 50, 100] },
    ];

    const [selected, setSelected] = useState(1);

    const handleChange = (e) => {
        setSelected(parseInt(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const option = options.find(opt => opt.id === selected);
        if (option) {
            // Tri décroissant pour le calcul
            const sortedDenoms = [...option.values].sort((a, b) => b - a);
            dispatch(setAvailableDenominationsAction(sortedDenoms));
        }
    };

    return (
        <Container>
            <h2>Choisissez une dénomination</h2>
            <form onSubmit={handleSubmit}>
                {options.map(option => (
                    <OptionWrapper key={option.id}>
                        <label>
                            <input
                                type="radio"
                                name="denominationOption"
                                value={option.id}
                                checked={selected === option.id}
                                onChange={handleChange}
                            /> {option.label}
                        </label>
                    </OptionWrapper>
                ))}
                <Button type="submit">Valider</Button>
            </form>
        </Container>
    );
};


const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #1e8449;
  }
`;

export default ChangeDenominationPage;
