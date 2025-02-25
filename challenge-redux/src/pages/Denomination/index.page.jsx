import React from 'react';
import styled from 'styled-components';
import DenominationForm from '../../components/DenominationForm/index.jsx';
import DenominationResult from '../../components/DenominationResult/index.jsx';

const PageContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem;
`;

const DenominationPage = () => {
    return (
        <PageContainer>
            <DenominationForm />
            <DenominationResult />
        </PageContainer>
    );
};

export default DenominationPage;
