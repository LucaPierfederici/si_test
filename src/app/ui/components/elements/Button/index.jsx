import styled from 'styled-components'

export const Button = styled.button`
padding: 10px;
margin: 10px;
color: ${props => props.color || "palevioletred"};
border: 2px solid ${props => props.color || "palevioletred"};
border-radius: 3px;
cursor: pointer;
`