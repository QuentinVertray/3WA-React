import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
    width: 100%;
`;

const Input = (props) => <StyledInput {...props} />;

export default Input;
