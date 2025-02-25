import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #2980b9;
    }
`;

const Button = (props) => <StyledButton {...props}>{props.children}</StyledButton>;

export default Button;
