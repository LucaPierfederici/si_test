import styled from 'styled-components'

export const Input = styled.input`
font-size: 14px;
border: 2px solid ${props => props.color || "palevioletred"};
border-radius: 3px;
padding: 5px;
margin: 5px;
`