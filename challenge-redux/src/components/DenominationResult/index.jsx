import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectResult, selectAvailableDenominations } from '../../store/selector/denomination-selector.js';

const ResultWrapper = styled.div`
    margin-top: 1rem;
    text-align: left;
`;

const ResultItem = styled.p`
    margin: 0.5rem 0;
`;

const DenominationResult = () => {
    const result = useSelector(selectResult);
    const availableDenominations = useSelector(selectAvailableDenominations);

    if (!result || Object.keys(result).length === 0) {
        return null;
    }

    return (
        <ResultWrapper>
            {availableDenominations.map((denom) => (
                <ResultItem key={denom}>
                    Dénomination {denom} unité(s) : {result[denom]}
                </ResultItem>
            ))}
        </ResultWrapper>
    );
};

export default DenominationResult;
