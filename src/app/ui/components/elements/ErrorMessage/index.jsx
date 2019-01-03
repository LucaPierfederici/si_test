import styled from 'styled-components'

export const ErrorMessage = styled.label`
color: ${props => props.color || "var(--primary-error-color)"};
font-family: var(--font-family);
display: block;
margin: 5px;
`