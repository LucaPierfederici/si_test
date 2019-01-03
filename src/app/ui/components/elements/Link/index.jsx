import styled from 'styled-components'
import { Link as RLink } from 'react-router-dom'

export const Link = styled(RLink)`
padding: 10px;
margin: 5px 10px;
color: ${props => props.color || "var(--primary-color)"};
border: 2px solid ${props => props.color || "var(--primary-color)"};
border-radius: 3px;
cursor: pointer;
font-family: var(--font-family);
font-size: 12px;
display: inline-block;
text-decoration: none;
text-transform: uppercase;
`