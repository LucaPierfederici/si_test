import styled from 'styled-components'

export const Input = styled.input`
font-size: 14px;
font-family: var(--font-family);
border: 2px solid ${props => props.color || "var(--primary-color)"};
border-radius: 3px;
padding: 5px;
margin: 5px;
`