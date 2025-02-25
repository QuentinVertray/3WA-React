import React from 'react';
import styled from 'styled-components';
import Input from '../Input.jsx';
import Button from '../Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setAmountAction, computeDenominationsAction, resetAction } from '../../store/action/denomination-action.js';
import { selectAmount } from '../../store/selector/denomination-selector.js';

const FormWrapper = styled.div`
    margin: 1rem 0;
    text-align: center;
`;

const DenominationForm = () => {
    const dispatch = useDispatch();
    const amount = useSelector(selectAmount);

    const handleChange = (e) => {
        dispatch(setAmountAction(e.target.value));
    };

    const handleCompute = () => {
        dispatch(computeDenominationsAction());
    };

    const handleReset = () => {
        dispatch(resetAction());
    };

    return (
        <FormWrapper>
            <h2>Saisir le montant</h2>
            <Input type="number" value={amount} onChange={handleChange} placeholder="Entrez le montant" />
            <div>
                <Button onClick={handleCompute}>Dénomination</Button>
                <Button onClick={handleReset}>Reset</Button>
            </div>
        </FormWrapper>
    );
};

export default DenominationForm;
