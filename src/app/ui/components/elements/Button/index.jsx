import styled from 'styled-components'

export const Button = styled.button`
padding: 10px;
margin: 10px;
color: ${props => props.color || "var(--primary-color)"};
border: 2px solid ${props => props.color || "var(--primary-color)"};
border-radius: 3px;
cursor: pointer;
font-family: var(--font-family);
font-size: 12px;
text-transform: ${props => props.uppercase && "uppercase" || "capitalize"};;
${props => props.right && !props.left && "float: right;"};
${props => props.left && !props.right && "float: left;"};
`