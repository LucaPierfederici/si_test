import styled from 'styled-components'

export const Button = styled.button`
min-height: 50px;
min-width: 50px;
padding: 5px;
margin: 5px;
color: ${props => props.color || "palevioletred"};
border: 2px solid ${props => props.color || "palevioletred"};
border-radius: 3px;
cursor: pointer;
`