import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const NavContainer = styled.nav`
    background-color: #f5f5f5;
    padding: 1rem;
    text-align: center;
    margin-bottom: 1rem;
`;

const NavLink = styled(Link)`
    margin: 0 1rem;
    color: #3498db;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

const Navigation = () => {
    return (
        <NavContainer>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/change">Denomination</NavLink>
        </NavContainer>
    );
};

export default Navigation;
